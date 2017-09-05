import React, { PureComponent } from 'react';

class CardRow extends PureComponent {
  renderCardRows() {
    const { card, getMinPayment } = this.props;

    const minPayment = getMinPayment(card);

    return (
      <div className="card-row">
        <div className="card-row__nickname">{card.nickname}</div>
        <div className="card-row__balance">${card.balance}</div>
        <div className="card-row__apr">{card.apr}%</div>
        <div className="card-row__min-payment">${minPayment}</div>
        <div className="card-row__payments-remaining">{12}</div>
      </div>
    );
  }

  render() {
    const cardRows = this.renderCardRows();

    return(
      <div>
        {cardRows}
      </div>
    );
  }
}

export default CardRow;