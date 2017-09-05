import { combineReducers } from 'redux';
import { reducer as cardsReducer } from '../PaydownCalculator';

export default combineReducers({
  cards: cardsReducer,
});