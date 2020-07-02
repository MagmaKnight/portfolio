import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import screenshot2 from "../assets/screenshot2.png";
import calculator from "../assets/Python-Calculator-6.png";
import calendar from "../assets/calendar.png";
import github from "../assets/GitHub-Mark-32px.png";
import boxicon from "../assets/box.svg"
import { withTranslation } from 'react-i18next';
class projects extends Component {
  render() {const { t } = this.props;
    return (
      <div>
        <h2>{t('project1')}</h2>
        <p>{t('project2')}</p>
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
                  <h3>{t('projectsite1')}</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    {t('projectsite2')}
                  </p>
                </Card.Text>
                <a
                  href="https://github.com/magmaknight/React-Portfolio/tree/master"
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
                  <h3>{t('moodlecalendar1')}</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    {t('moodlecalendar2')}
                  </p>
                </Card.Text>
                <a
                  href="https://github.com/magmaknight/moodle-calendar"
                  className="gitbutton"
                >
                  <img src={github} className="contacts" alt="" />
                </a>
                <a
                  href="https://github.com/magmaknight/moodle-calendar/releases"
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
                  <h3>{t('tkalculator1')}</h3>
                </Card.Title>
                <Card.Text>
                  <p>{t('tkalculator2')}</p>
                </Card.Text>
                <a
                  href="https://github.com/magmaknight/tkalculator"
                  className="gitbutton"
                >
                  <img src={github} className="contacts" alt="" />
                </a>
                <a
                  href="https://github.com/magmaknight/tkalculator/releases"
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

export default withTranslation()(projects);
