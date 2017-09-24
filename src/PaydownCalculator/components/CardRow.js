import React, { PureComponent } from 'react';
import moment from 'moment';

class CardRow extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCalendarOpen: false,
    };
  }

  openCardCalendar(card) {
    const { isCalendarOpen } = this.state;
    this.setState({ isCalendarOpen: !isCalendarOpen });
  }

  renderPaymentCells(remaingPayments) {
    const paymentCells = remaingPayments.map((paymentCell, index) => {
      const { monthlyPayment, remainingBalance } = paymentCell;
      const key = `cell-${monthlyPayment}-${remainingBalance}`;

      return (
        <div
          key={key}
          className="payment-cell"
        >
          <div className="payment-cell__month">
            {moment().add(index + 1, 'months').format('MMMM')}
          </div>
          <div className="payment-cell__monthly-payment">
            {monthlyPayment}
          </div>
          <div className="payment-cell__emaining-balance">
            {remainingBalance}
          </div>
        </div>
      )
    });

    return (
      <div className="calendar-row">
        <div className="calendar-row__spacer" />
        <div className="calendar-row__cell-container">
          {paymentCells}
        </div>
      </div>
    );
  }

  renderPaymentInfo(card) {
    const yearlyInterest = card.balance * card.apr;
    const monthlyInterest = yearlyInterest / 12;

    let adjustedBalance = card.balance + monthlyInterest;

    // TODO: Update balance & initial payment cell logic
    // First cell is next month payment info
    const remaingPayments = [];

    while (adjustedBalance > 0) { 
      const monthlyPayment = Math.min(25, adjustedBalance);
      adjustedBalance -= Math.min(monthlyPayment, adjustedBalance);
      adjustedBalance = adjustedBalance.toFixed(2);

      const montlyPaymentCell = {
        monthlyPayment,
        remainingBalance: adjustedBalance,
      };

      remaingPayments.push(montlyPaymentCell);
    }

    return remaingPayments;
  }

  renderCardRow() {
    const { card, getMinPayment } = this.props;
    const { isCalendarOpen } = this.state;

    const minPayment = getMinPayment(card);
    const paymentInfo = this.renderPaymentInfo(card);
    const paymentCells = this.renderPaymentCells(paymentInfo);
    
    return (
      <div>
        <div
          className="card-row"
          onClick={() => this.openCardCalendar(card)}
        >
          <div className="card-row__nickname">{card.nickname}</div>
          <div className="card-row__balance">${card.balance}</div>
          <div className="card-row__apr">{card.apr}%</div>
          <div className="card-row__min-payment">${minPayment}</div>
          <div className="card-row__payments-remaining">{paymentInfo.length}</div>
        </div>

        {isCalendarOpen && paymentCells}
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.renderCardRow()}
      </div>
    );
  }
}

export default CardRow;