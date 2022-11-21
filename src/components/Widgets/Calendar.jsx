import React from "react";
import gcal from "./Google_Calendar_icon.png";
import Arrow from "./arrow.svg";

const Calendar = () => {
  return (
    <div className="cal-widget">
      <img src={gcal} alt="gcal" className="cal-icon" />
      {/* <div> 
        <p>adding some cal stuff ...</p>
      </div> */}
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

export default Calendar;
