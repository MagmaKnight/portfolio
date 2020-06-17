import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import office from "../../assets/office.svg";

export default class officeskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={office} className="skills2" alt="" />

            <h2>Office Tools</h2>
            <p className="jumbocontent">
              I use Excel, Word and Powerpoint almost daily. I'm used to having
              detailed spreadsheets to control my finances, writing
              documentation and some personal projects on Word, and making
              powerpoint presentations.
            </p>
            <p className="jumbocontent">
              I also know enough VBA to make small Excel macros and scripts.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
