import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { NavLink, HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import facepicture from "./assets/circle-cropped(1).png";
import moon from "./assets/favicon.png";
import { withTranslation } from 'react-i18next';
class SideBar extends React.Component {
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
    const { t } = this.props;
    return (
      <Menu
        customBurgerIcon={<img src={moon} class="buttonlogo" alt="" />}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <HashRouter>
          <div>
            <div class="title">
              <img src={facepicture} class="mainpicture" alt="" />
              <p className="titlecard">
                Luchas Arie
              </p>
            </div>
            <ul className="header">
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/home">
                {t('card1', 'Welcome')}
                </NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/about">
                 {t('card3', 'About')}
                </NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/skills">
                {t('card2', 'Skills')}
                </NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/projects">
                {t('card4', 'Projects')}
                </NavLink>
              </li>
              <li onClick={() => this.closeMenu()}>
                <NavLink to="/pages/contact">
                {t('card5', 'Contact Me!')}
                </NavLink>
              </li>
            </ul>
          </div>
        </HashRouter>
      </Menu>
    );
  }
}
export default withTranslation()(SideBar);
