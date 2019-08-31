import { DRAW_CARDS, REVEAL_CARDS } from "../constants/game";

const defaultState = [
  {
    username: "player1",
    totalPoint: 0,
    money: 100,
    cards: []
  },
  {
    username: "player2",
    totalPoint: 0,
    money: 100,
    cards: []
  },
  {
    username: "player3",
    totalPoint: 0,
    money: 100,
    cards: []
  },
  {
    username: localStorage.getItem("userLogin")
      ? JSON.parse(localStorage.getItem("userLogin")).TaiKhoan
      : "cybersoft",
    totalPoint: 0,
    money: 100,
    cards: []
  }
];

const playersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DRAW_CARDS: {
      console.log(action);
      for (let i in action.cards) {
        const index = i % state.length;
        state[index].cards.push(action.cards[i]);
      }
      console.log(state);
      return [...state];
    }
    case REVEAL_CARDS: {
      console.log(state);
    }
    default:
      return state;
  }
};

export default playersReducer;
