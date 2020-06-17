import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import react from "../../assets/react.png";

export default class reactjsskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={react} className="skills2" alt="" />
            <h2>React JS</h2>
            <p className="jumbocontent">
              React JS was quite the beast to start learning, but I consider
              myself an intermediate at it. I plan on also learning Angular soon
              enough.
            </p>
            <p className="jumbocontent">
              This entire site was built using React JS , React Bootstrap and
              React Router. Code available 
              <a href="https://github.com/MagmaKnight/portfolio"> here</a>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
