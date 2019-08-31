import React from "react";
import Card from "./Card";

const Player = ({ player, index }) => {
  return (
    <div className={`player-${index}`}>
      <p>
        {player.username} | {player.money}
      </p>
      <div className="d-flex">
        {player.cards.map(item => (
          <Card card={item} />
        ))}
      </div>
    </div>
  );
};

export default Player;
