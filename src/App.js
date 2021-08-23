import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import { getTokenFromUrlResponse } from "./api/spotify";
import Player from "./components/player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrlResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); //Approval: this token help to talk back&front b/w spotify and reactApp
      spotify.getMe().then((user) => {
        console.log("👨", user);
      });
    }

    console.log("I HAVE A TOKEN 👉", token);
  }, [token]);

  return (
    <div className="App">
      <header className="App-header">{token ? <Player /> : <Login />}</header>
    </div>
  );
}

export default App;

// 462dc5eccb0b4ffd8b7cf0cad5d75adc
