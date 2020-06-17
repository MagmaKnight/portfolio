import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import python from "../../assets/python.svg.png";

export default class pythonskill extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Skills</h2>
        </div>
        <SkillSelection />
        <div>
          <Jumbotron>
            <img src={python} className="skills2" alt="" />
            <h2>Python 3.8</h2>
            <p className="jumbocontent">
              My favorite programming language. I started out with Python, and
              have written a couple programs with it, the latest of which being
              the Moodle Calendar. I have experience in some libraries, and am
              looking forward to learning data science with it.
            </p>
            <h4>Libraries</h4>
            <p>Selenium Webdriver</p>
            <p>OpenCV 4</p>
            <p>PyQt 5</p>
            <p>Tesseract</p>
            <p>Tkinter</p>
            <p>Numpy</p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
