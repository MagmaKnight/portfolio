import React, { Component } from "react";
import SkillSelection from "./skillpages/default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
export default class skills extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <h2>Click on any of the icons for more details.</h2>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
