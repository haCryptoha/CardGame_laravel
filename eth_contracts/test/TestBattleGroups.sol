pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/battles/BattleGroups.sol";

contract TestBattleGroups {
	CryptoCardsCore cryptoCards = CryptoCardsCore(DeployedAddresses.CryptoCardsCore());

	// Testing the createBattleGroup() function
	function testCreateBattleGroup() public {
		uint expected = cryptoCards.BattleGroupContract().countBattleGroups();

		uint256[5] memory cards = [uint256(1), uint256(2), uint256(3), uint256(4), uint256(5)];

		uint returnedID = cryptoCards.BattleGroupContract().createBattleGroup(this, cards);

		Assert.equal(returnedID, expected, "New BattleGroup should have next sequential battleGroupID");
	}

	// Test creating many additional battlegroups
	function testCreateManyGroups() public {
		uint numGroups = 5;
		uint expected = cryptoCards.BattleGroupContract().countBattleGroups() + numGroups;

		uint i = 0;
		for (i = 0; i < numGroups; i++) {
			testCreateBattleGroup();
		}

		uint256 totalGroups = cryptoCards.BattleGroupContract().countBattleGroups();
		Assert.equal(totalGroups, expected, "Count of battlegroups should increase by numGroups");
	}

}