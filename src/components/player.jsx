import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from './footer';

export default function Player({ spotify }) {
  return (
    <div className="outer__player">
      <div className="player__container">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
