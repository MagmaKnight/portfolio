import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import css from "../../assets/css-3.svg";

export default class cssskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
          <img src={css} className="skills2" alt="" />
            <h2>Cascading Style Sheets 3</h2>
            <p className="jumbocontent">
              I have studied CSS alongside HTML since I was little, making small websites for school projects.
              I am aware of proper CSS practice, avoiding styling outside of the CSS files.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
