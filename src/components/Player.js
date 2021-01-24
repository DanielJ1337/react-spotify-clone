import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* Sidebar */}
        {/* Body */}
        <Body />
      </div>
      <div className="player__footer">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Player;
