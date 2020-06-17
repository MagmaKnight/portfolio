import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import html from "../../assets/html5.png";
export default class htmlskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={html} className="skills2" alt="" />
            <h2>Hyper Text Markup Language 5</h2>
            <p className="jumbocontent">
              I have often built many small websites examples when I was young,
              having done several of them for school projects. I also worked on
              a character sheet based only on HTML and CSS on the popular TRPG
              site Roll20, the code of which is still hosted on my Github <a href="https://github.com/MagmaKnight/instinct">here.</a>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
