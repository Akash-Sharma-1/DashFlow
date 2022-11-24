import React from "react";
import gcal from "./Google_Calendar_icon.png";
import axios from "axios";
import Arrow from "./arrow.svg";

const JIRA = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    localStorage.setItem("tokens", JSON.stringify(tokens));
  }, [tokens]);

  //   useEffect(() => {
  //     axios
  //       .get(weblink)
  //       .then((response) => {
  //         setCurrSong(response.data.recenttracks.track.name);
  //         setCurrArtist(response.data.recenttracks.track.artist["#text"]);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div className="cal-widget">
      {/* <img src={gcal} alt="gcal" className="cal-icon" /> */}
      <div>
        <p>adding some cal stuff ...</p>
      </div>
      <button
        className="cal-widget-button"
        style={{
          position: "absolute",
          bottom: "1.5em",
          left: "1.5em",
          padding: ".8em",
        }}
      >
        <img
          alt="arrow"
          className="cal-arrow"
          src={Arrow}
          style={{ maxWidth: "1.8em" }}
        />
      </button>
    </div>
  );
};

export default JIRA;
