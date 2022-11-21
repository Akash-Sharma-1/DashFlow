import React from "react";
import todoicon from "./Microsoft_To-Do_icon.png";
import Arrow from "./arrow.svg";

const Todos = () => {
  return (
    <div className="cal-widget">
      <img src={todoicon} alt="todoicon" className="cal-icon" />
      {/* <div> 
        <p>adding some cal stuff ...</p>
      </div> */}
      <button
        className="todo-widget-button"
        style={{
          position: "absolute",
          bottom: "1.5em",
          left: "1.5em",
          padding: ".8em",
        }}
      >
        <img
          alt="arrow"
          className="todo-arrow"
          src={Arrow}
          style={{ maxWidth: "1.8em" }}
        />
      </button>
    </div>
  );
};

export default Todos;
