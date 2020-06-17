import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import screenshot2 from "../assets/screenshot2.png";
import calculator from "../assets/Python-Calculator-6.png";
import calendar from "../assets/calendar.png";
import github from "../assets/GitHub-Mark-32px.png";
import boxicon from "../assets/box.svg"
class projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>Click the Github Icon for the repo, or the Package icon for latest release.</p>
        <hr></hr>
        <div className="specialcolumn">
          <CardColumns>
            <Card border="danger" bg="special" style={{ width: "16em" }}>
              <Card.Img
                variant="top"
                src={screenshot2}
                alt="A picture of this site inside this site, wow."
              />
              <Card.Body>
                <Card.Title>
                  <h3>This Site</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    Portfolio site created using React.js and a lot of coffee.
                  </p>
                </Card.Text>
                <a
                  href="https://github.com/MagmaKnight/React-Portfolio/tree/master"
                  className="gitbutton"
                >
                  <img src={github} className="contacts" alt="" />
                </a>
              </Card.Body>
            </Card>
            <Card border="danger" bg="special" style={{ width: "16em" }}>
              <Card.Img variant="top" src={calendar} alt="" />
              <Card.Body>
                <Card.Title>
                  <h3>Moodle Calendar</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    A python program built with PyQt5 and WebDriver that checks
                    a student's moodle for quizzes and assignments.
                  </p>
                </Card.Text>
                <a
                  href="https://github.com/MagmaKnight/moodle-calendar"
                  className="gitbutton"
                >
                  <img src={github} className="contacts" alt="" />
                </a>
                <a
                  href="https://github.com/MagmaKnight/moodle-calendar/releases"
                  className="gitbutton"
                >
                  <img src={boxicon} className="contacts" alt="" />
                </a>
              </Card.Body>
            </Card>
            <Card border="danger" bg="special" style={{ width: "16em" }}>
              <Card.Img variant="top" src={calculator} alt="" />
              <Card.Body>
                <Card.Title>
                  <h3>TKalculator</h3>
                </Card.Title>
                <Card.Text>
                  <p>A simple calculator built using Python and Tkinter </p>
                </Card.Text>
                <a
                  href="https://github.com/MagmaKnight/tkalculator"
                  className="gitbutton"
                >
                  <img src={github} className="contacts" alt="" />
                </a>
                <a
                  href="https://github.com/MagmaKnight/tkalculator/releases"
                  className="gitbutton"
                >
                  <img src={boxicon} className="contacts" alt="" />
                </a>
              </Card.Body>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default projects;
