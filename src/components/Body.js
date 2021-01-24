import React from "react";

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
          <PlayCircleFilledIcon className="body__play-icon" />
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div className="body__tableHeader">
          <div className="body__hash">#</div>
          <div className="body__title">Title</div>
          <div>Album</div>
          <div>Date Added</div>
          <div>
            <ScheduleIcon />
          </div>
          <hr />
        </div>

        {/* The list of songs gets rendered */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
