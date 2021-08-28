import React from "react";
import logo from "../images/spotify2019-830x350.jpg";
import SidebarOptions from "./sidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../contextApi/StateProvider";

export default function Sidebar() {
  const [{ playlists }] = useStateValue();
  return (
    <div className="sidebar__container">
      <img className="sidebar__logo" src={logo} alt="logo" />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}
