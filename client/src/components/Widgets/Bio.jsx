import React from "react";
import bitmoji from "./bitmoji.png";

const Bio = () => {
  return (
    <div
      className="widget-bio row"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "1em",
      }}
    >
      <div
        style={{ alignItems: "center", justifyContent: "center" }}
        className="col-5"
      >
        <img src={bitmoji} alt="bitmoji" className="widget-bio-memoji" />
        <div style={{ paddingTop: ".5em", textAlign: "center" }}>
          <button>
            <a
              href="https://akash-sharma-1.github.io/"
              alt="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </button>
          &nbsp;
          <button>
            <a
              href="https://akash-sharma-1.github.io/blog/"
              alt="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Blogs{" "}
            </a>
          </button>
        </div>
      </div>

      <div
        style={{ alignItems: "center", justifyContent: "center" }}
        className="col-7"
      >
        <h3>Akash Sharma</h3>
        <h6 style={{ color: "#C9D4F9" }}>@PrettyBasicAkashonomics</h6>
        <p>
          People say nothing is impossible, {"\n"} hence I do nothing every day.
        </p>
      </div>
    </div>
  );
};

export default Bio;
