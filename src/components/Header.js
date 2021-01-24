import React from "react";
import "../styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or People" type="text" />
      </div>

      <div className="header__right">
        <Avatar className={classes.small} src={user?.images[0]?.url} alt="YA" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
