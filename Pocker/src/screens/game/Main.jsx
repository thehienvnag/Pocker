import React from "react";
import { connect } from "react-redux";
import Player from "./Player";

const Main = ({ players }) => {
  console.log(players);
  return (
    <div className="game-main">
      {players.map((player, index) => (
        <Player key={index} player={player} index={index + 1} />
      ))}
      <img
        className="img-card"
        src="https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
        alt="card"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(Main);
