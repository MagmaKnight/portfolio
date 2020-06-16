import React, { Component } from "react";
import github from "../assets/GitHub-Mark-32px.png";
import instagram from "../assets/instagram.svg";
import mail from "../assets/mail.svg";
import whatsapp from "../assets/whatsapp(1).svg";
import linkedin from "../assets/linkedin.svg";

class contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact me at...</h2>
        <a href="mailto:luchasarie@gmail.com"><img src={mail} className="contacts" alt="" /> <p className="contactinfo">luchasarie@gmail.com</p>
        </a>
        <br></br>
        <img src={whatsapp} className="contacts" alt="" /> <p className="contactinfo">+55 11 93340-5070</p>
        <hr></hr>
        <h2>Or check me out at...</h2>
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

export default contact;
