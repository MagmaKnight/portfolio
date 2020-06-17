import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import sql from "../../assets/database.svg";

export default class sqlskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={sql} className="skills2" alt="" />
            <h2>Server Query Language</h2>
            <p className="jumbocontent">
              I use MySQL on my WAMP installation, and I'm knowledgeable about
              the basic commands and functions of SQL.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
