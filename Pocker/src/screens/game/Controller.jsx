import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCards, drawCards, revealCards } from "../../store/actions/game";

const Controller = ({ cards, onGetCards, onDrawCards, onRevealCards }) => {
  useEffect(() => {
    if (Object.keys(cards).length > 0) {
      onDrawCards(cards.deck_id);
    }
  }, [cards, onDrawCards]);
  return (
    <div style={{ textAlign: "center" }}>
      <button className="btn btn-success" onClick={() => onGetCards()}>
        New game
      </button>
      <button onClick={() => onRevealCards()}>Reveal</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.game.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCards: () => dispatch(fetchCards()),
    onDrawCards: deckID => dispatch(drawCards(deckID)),
    onRevealCards: () => dispatch(revealCards())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);
