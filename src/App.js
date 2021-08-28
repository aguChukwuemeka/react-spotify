import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import { getTokenFromUrlResponse } from "./api/spotify";
import Player from "./components/player";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./contextApi/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrlResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //Approval: this token help to talk back&front b/w spotify and reactApp

      spotify.getMe().then((user) => {
        // console.log("👨", user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log('👨‍🦯',playlists);
        dispatch({
          type: "SET_PLAYLIST",
          playlists,
        });
      });
    }

    // console.log("I HAVE A TOKEN 👉", token);
  }, [token, dispatch]);
  console.log("👨", user);
  console.log("👽", token);

  return (
    <div className="App">
      <header className="App-header">
        {token ? <Player spotify={spotify} /> : <Login />}
      </header>
    </div>
  );
}

export default App;

// yarn add spotify-web-api-js  --dependance
