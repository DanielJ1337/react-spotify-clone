import React from "react";
import { loginURL } from "../spotify";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />
      <a href={loginURL} className="login__button">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
