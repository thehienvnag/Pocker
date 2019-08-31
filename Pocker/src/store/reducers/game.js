import { SAVE_CARDS, REVEAL_CARDS } from "../constants/game";

const defaultState = {
  cards: {},
  revealStatus: false
};

const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_CARDS: {
      const { cards } = action;
      return { ...state, cards };
    }
    case REVEAL_CARDS:
      return { ...state, revealStatus: true };
    default:
      return state;
  }
};

export default gameReducer;
