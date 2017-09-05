import React, { PureComponent } from 'react';

class CardRow extends PureComponent {
  getAvgApr() {
    const { cards } = this.props;

    let avgApr = 0;
    cards.forEach((card) => {
      avgApr += card.apr;
    });

    avgApr /= cards.length;

    avgApr = avgApr.toFixed(2);

    return avgApr;
  }

  getTotalBalance() {
    const { cards } = this.props;

    let totalBalance = 0;
    cards.forEach((card) => {
      totalBalance += card.balance;
    });

    return totalBalance;
  }

  getMinPaymentTotal() {
    const { cards, getMinPayment } = this.props;

    let minPaymentTotal = 0;
    cards.forEach((card) => {
      minPaymentTotal += getMinPayment(card);
    })
    return minPaymentTotal;
  }

  renderTotalsRow() {
    const totalBalance = this.getTotalBalance();

    const avgApr = this.getAvgApr();
    const minPaymentTotal = this.getMinPaymentTotal();

    return (
      <div className="card-row">
        <div className="card-row__nickname">Totals</div>
        <div className="card-row__balance">${totalBalance}</div>
        <div className="card-row__apr">{avgApr}%</div>
        <div className="card-row__min-payment">${minPaymentTotal}</div>
        <div className="card-row__payments-remaining">12</div>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.renderTotalsRow()}
      </div>
    );
  }
}

export default CardRow;