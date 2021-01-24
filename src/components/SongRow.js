import React from "react";
import "../styles/songrow.css";

const SongRow = ({ track = "test", playlist }) => {
  return (
    <div className="songrow">
      <img className="songrow__album" src={track?.album.images[0].url} alt="" />
      <div className="songrow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {/* -{" "}{track.album.name} */}
        </p>
      </div>
      <div className="songrow__albumName">{track.album.name}</div>
      <div className="songrow__dateAdded">{track.added_at}</div>
      <div className="songrow__time">{track.duration_ms / 1000}</div>
    </div>
  );
};

export default SongRow;
