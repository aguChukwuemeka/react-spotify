import React from "react";
import Header from "./header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SongRow from "./SongRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useStateValue } from "../contextApi/StateProvider";

export default function Main({ spotify }) {
  const [{ discover_weekly }] = useStateValue();
  return (
    <div className="main__container">
      <Header spotify={spotify} />
      <section className="main__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <article className="main__info__text">
          <strong>PLAYLIST</strong>
          <h4>Discover weekly</h4>
          <p>{discover_weekly?.description}</p>
          <span>spotify: 1 like . 1hr 23mins</span>
        </article>
      </section>
      <section className="main__songs__views">
        <div className="main__songs__view__icon">
          <PlayCircleFilledIcon className="main__play__icon" />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="container">
          <table
            className="table table-responsive-sm"
            style={{ color: "#c0c0c0" }}
          >
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">TITLE</th>
                <th scope="col">ALBUM</th>
                <th scope="col">DATE</th>
                <th scope="col">ADDED</th>
                <th scope="col">
                  <AccessTimeIcon />
                </th>
              </tr>
            </thead>
          </table>
          {discover_weekly?.tracks.items.map((item, index) => (
            <SongRow key={index} track={item.track} />
          ))}
        </div>
      </section>
    </div>
  );
}
