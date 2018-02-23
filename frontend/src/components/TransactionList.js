import React, { Component } from 'react';
import '../styles/App.css';
import 'animate.css';
import { withRouter } from 'react-router-dom';

class TransactionList extends Component {
  render() {
    let { transactions } = this.props;
    console.log('transactions');
    console.log(transactions);
    return (
      <div>
        <div className="transaction">
          <div className="table-responsive">
            <table className="table table-condensed table-bordered">
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>Transaction Time</th>
                  <th>Card Id</th>
                  <th>Transaction Price</th>
                </tr>
                {transactions.map((transaction, index) => {
                  let style = {
                    animationDelay: (index % 3) / 10 + 's'
                  };
                  <tbody key={index}>
                    <tr>
                      <td rowspan="index + 1">
                        <div>{transaction.id}</div>
                      </td>
                      <td>
                        <div>{transaction.time}</div>
                      </td>
                      <td>
                        <div>{transaction.card_id}</div>
                      </td>
                      <td>
                        <div>{transaction.price}</div>
                      </td>
                    </tr>
                  </tbody>;
                })}
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TransactionList);
