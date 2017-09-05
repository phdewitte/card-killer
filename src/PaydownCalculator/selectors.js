import { createSelector } from 'reselect';

export const cardRoot = state => state.cards;

export const cardState = createSelector(
  cardRoot,
  (cardRootState) => ({
    cards: cardRootState,
  })
)

export default cardState;