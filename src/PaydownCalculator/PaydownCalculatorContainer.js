import React, { Component } from 'react';
import { connect } from 'react-redux';
import cardState from './selectors';
import CardRow from './components/CardRow';
import TotalsRow from './components/TotalsRow';
import './PaydownCalculator.css';


export class PaydownCalculatorContainer extends Component {
  getMinPayment = (card) => {
    let minPayment = (card.balance * (1 + card.apr)) / 12;
    minPayment = minPayment.toFixed(2);
    minPayment = parseInt(minPayment, 10);
    return minPayment;
  }

  renderCardRows() {
    const { cards } = this.props;

    return cards.map((card) => (
      <div key={card.id}>
        <CardRow
          card={card}
          getMinPayment={this.getMinPayment}
        />
      </div>
    ));
  }

  renderHeaderRows() {
    return (
      <div className="card-row">
        <div className="card-row__nickname">Nickname</div>
        <div className="card-row__balance">Balance</div>
        <div className="card-row__apr">Apr</div>
        <div className="card-row__min-payment">Min Payment</div>
        <div className="card-row__payments-remaining">Payments Remaining</div>
      </div>
    );
  }

  render() {
    const { cards } = this.props;

    const headerRows = this.renderHeaderRows();
    const cardRows = this.renderCardRows();

    return(
      <div className="calculator-container">
        {headerRows}
        {cardRows}
        <TotalsRow
          cards={cards}
          getMinPayment={this.getMinPayment}
        />
      </div>
    );
  }
}

// const mapState = state => ({
//   cards: state.cards,
// });

const mapDispatch = dispatch => ({});

export default connect(cardState, mapDispatch)(PaydownCalculatorContainer);
