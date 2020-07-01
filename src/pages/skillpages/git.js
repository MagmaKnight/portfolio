import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import github from "../../assets/GitHub-Mark-32px.png";
export default class gitskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <a href="https://github.com/magmaknight">
              <img src={github} className="skills3" alt="" />
            </a>
            <h2>GIT</h2>
            <p className="jumbocontent">
              I am a regular user of Github, and know how to use the Git VCS
              system very well. Commits, pushes, branches, forks, all are tools
              that I am aware on their uses and versatilities.{" "}
            </p>
            <p className="jumbocontent">
              You can check out my Github on the contact me section, or by
              clicking the Github icon above.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
