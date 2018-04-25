pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptoCardsCore.sol";

contract TestBattles {
	CryptoCardsCore cryptoCards = CryptoCardsCore(DeployedAddresses.CryptoCardsCore());

	function testBattlesContract() public {
		Battles _battleContract = cryptoCards.BattleContract();

		Assert.notEqual(address(_battleContract), 0, "Battle Contract Should Exist");
	}

	// Testing the createBattle() function
	function testCreateBattle() public {
		uint expected = cryptoCards.BattleContract().countBattles();

		uint256 op1 = uint256(1);
		uint256 op2 = uint256(2);

		uint returnedID = cryptoCards.BattleContract().createBattle(op1, op2);

		Assert.equal(returnedID, expected, "New battle should have next sequential battleID");
	}

	// Test creating many additional battles
	function testCreateManyBattles() public {
		uint numBattles = 5;
		uint expected = cryptoCards.BattleContract().countBattles() + numBattles;

		uint i = 0;
		for (i = 0; i < numBattles; i++) {
			testCreateBattle();
		}

		uint256 totalBattles = cryptoCards.BattleContract().countBattles();
		Assert.equal(totalBattles, expected, "Count of battles should increase by numBattles");
	}
}