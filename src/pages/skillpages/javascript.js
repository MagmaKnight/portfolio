import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import javascript from "../../assets/javascript.svg";

export default class javascriptskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            {" "}
            <img src={javascript} className="skills2" alt="" />
            <h2>Javascript (ES6)</h2>
            <p className="jumbocontent">
              I learned Javascript in 2019, when I was setting up my first
              Tampermonkey scripts to assist me out in boring tasks. I would
              call myself a beginner at it, still, but I'm learning more every
              day.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
