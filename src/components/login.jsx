import React from "react";
import logo from "../images/spotify2019-830x350.jpg";
import { accessLoginUrl } from "../api/spotify";

export default function Login() {


  return (
    <div className="login__page">
      <img src={logo} alt="" />
      <a href={accessLoginUrl} className="p-3">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}
