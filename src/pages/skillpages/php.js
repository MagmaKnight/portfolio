import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import php from "../../assets/php.svg";

export default class phpskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={php} className="skills2" alt="" />
            <h2>PHP Hypertext Processor</h2>
            <p className="jumbocontent">
              I have, on my computer, a WAMP stack which I use to develop small,
              personal web applications, and PHP ties it all together. One of my
              current projects in development is written in PHP, and I'm learning
              more about it every day.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
