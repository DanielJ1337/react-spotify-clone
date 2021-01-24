import React from "react";
import "../styles/footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Albums and song details</p>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__icon green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon play" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon green" />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon />
        <Grid container spacing={3}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value="" onChange="" aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
