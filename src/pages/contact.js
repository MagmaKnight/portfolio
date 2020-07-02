import React, { Component } from "react";
import github from "../assets/GitHub-Mark-32px.png";
import instagram from "../assets/instagram.svg";
import mail from "../assets/mail.svg";
import whatsapp from "../assets/whatsapp(1).svg";
import linkedin from "../assets/linkedin.svg";
import { withTranslation } from 'react-i18next';
class contact extends Component {
  render() { const { t } = this.props;
    return (
      <div>
        <h2>{t('contact1')}</h2>
        <a href="mailto:luchasarie@gmail.com"><img src={mail} className="contacts" alt="" /> <p className="contactinfo">luchasarie@gmail.com</p>
        </a>
        <br></br>
        <img src={whatsapp} className="contacts" alt="" /> <p className="contactinfo">+55 11 93340-5070</p>
        <hr></hr>
        <h2>{t('contact2')}</h2>
        <a href="https://www.github.com/magmaknight"><img src={github} className="contacts" alt="" /> <p className="contactinfo">Github.com/magmaknight</p>
        </a><br></br>
        <a href="https://www.linkedin.com/in/luchas-rosa"><img src={linkedin} className="contacts" alt="" /> <p className="contactinfo">Linkedin.com/in/luchas-rosa</p>
        </a><br></br>
        <a href="https://instagram.com/luchas_com_x/"><img src={instagram} className="contacts" alt="" /> <p className="contactinfo">Instagram.com/luchas_com_x</p>
        </a><br></br>
      </div>
    );
  }
}

export default withTranslation()(contact);
