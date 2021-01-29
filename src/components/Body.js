import React, { useState } from "react";

import "../styles/body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ScheduleIcon from "@material-ui/icons/Schedule";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [playState, setPlayState] = useState();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="discover" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__play-icon"
            onClick={playPlaylist}
          />
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div className="body__tableHeader">
          <div className="body__hash">#</div>
          <div className="body__title">Title</div>
          <div className="body__albumName">Album</div>
          <div className="body__dateAdded">Date Added</div>
          <div className="body__timeIcon">
            <ScheduleIcon />
          </div>
          <hr />
        </div>

        {/* The list of songs gets rendered */}
        <div className="body__songList">
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow
              id={new Date().getTime().toString()}
              playSong={playSong}
              track={item.track}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
