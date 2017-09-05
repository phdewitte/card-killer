const fakeState = [
  { id: 1, nickname: 'Citi', balance: 100, apr: 0.15 },
  { id: 2, nickname: 'Chase', balance: 200, apr: 0.25 },
  { id: 3, nickname: 'Disc', balance: 300, apr: 0.175 },
];

const cardsReducer = (state = fakeState, action = null) => {
  switch (action.type) {
  default:
    return state;
  }
}

export default cardsReducer;