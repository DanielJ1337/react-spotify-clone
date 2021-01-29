import React from "react";
import SidebarOption from "./SidebarOption";
import "../styles/sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__logo"
          src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
          alt=""
        />
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
          <SidebarOption
            id={new Date().getTime().toString()}
            title={playlist.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
