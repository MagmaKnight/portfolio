import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { NavLink, HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import facepicture from "./assets/circle-cropped(1).png";
import moon from "./assets/moon.svg";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  openMenu() {
    this.setState({ menuOpen: true });
  }

  render() {
    return (
      <Menu
        customBurgerIcon={ <img src={moon} class="buttonlogo" /> }
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <HashRouter>
          <div>
            <div class="title">
              <img src={facepicture} class="mainpicture" alt="" />
              <p className="titlecard">Luchas Arie</p>
            </div>
            <ul className="header">
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/home">Home</NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/about">About</NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/skills">Skills</NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/projects">Projects</NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/contact">Contact Me!</NavLink>
              </li>
            </ul>
          </div>
        </HashRouter>
      </Menu>
    );
  }
}
