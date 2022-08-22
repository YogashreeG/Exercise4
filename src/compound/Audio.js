import React from "react";

export function Audio() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Specification</a>{" "}
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Connect</a>{" "}
            </li>
          </ul>
          <div className="right-col"></div>

          <audio src="../audio.mp3" controls></audio>
        </div>
      </div>
    </>
  );
}
