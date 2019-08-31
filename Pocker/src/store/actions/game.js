import axios from "axios";
import { SAVE_CARDS, DRAW_CARDS, REVEAL_CARDS } from "../constants/game";

export const fetchCards = () => {
  return dispatch => {
    axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    })
      .then(res => {
        dispatch(actSaveCard(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actSaveCard = cards => {
  return {
    type: SAVE_CARDS,
    cards
  };
};

export const drawCards = deckID => {
  return dispatch => {
    axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=12`
    })
      .then(res => {
        console.log(res);
        dispatch(atcDrawCards(res.data.cards));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const atcDrawCards = cards => {
  return {
    type: DRAW_CARDS,
    cards
  };
};

export const revealCards = () => {
  return {
    type: REVEAL_CARDS
  };
};
