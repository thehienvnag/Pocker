import React from "react";
import { connect } from "react-redux";

const Card = ({ card, revealStatus }) => {
  return (
    <img
      style={{ width: "70px" }}
      src={
        revealStatus
          ? card.image
          : "https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
      }
      alt="card"
    />
  );
};

const mapStateToProps = state => {
  return {
    revealStatus: state.game.revealStatus
  };
};

export default connect(mapStateToProps)(Card);
