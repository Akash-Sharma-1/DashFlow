import React, { useState, useEffect } from "react";
import axios from "axios";
import spotify from "./spotify-logo.png";

const username = "lowaterbury";
const apiKey = "ac7dd22471e14b250e68490f97ed5c47";

const Spotify = () => {
  const [currSong, setCurrSong] = useState("");
  const [currArtist, setCurrArtist] = useState("");
  const weblink =
    "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=Akashomatics&api_key=ad6c3b667c489bcbab1edd2b36e9006d&limit=1&nowplaying=true&format=json";
  const weblink2 =
    "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=lowaterbury&api_key=ac7dd22471e14b250e68490f97ed5c47&limit=1&nowplaying=true&format=json";
  useEffect(() => {
    axios
      .get(weblink)
      .then((response) => {
        setCurrSong(response.data.recenttracks.track.name);
        setCurrArtist(response.data.recenttracks.track.artist["#text"]);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="spotify-widget">
      <img src={spotify} alt="spotify-logo" />
      <p style={{ paddingTop: "1em" }}>Currently Listening</p>
      <h5 style={{ color: "#63DBBE" }}>{currSong}</h5>
      <p>{currArtist}</p>
    </div>
  );
};

export default Spotify;
