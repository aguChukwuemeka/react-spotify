import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
// import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import logo from "../images/spotify2019-830x350.jpg";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    //   console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <img className="footer__album_log" src={logo} alt="" />
          <div className="footer__song_info">
            <h6>Yeah!</h6>
            <p>User</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2} className={classes.root}>
            <Grid item>
              <PlaylistPlayIcon className='footer__playlistd__icon' />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
