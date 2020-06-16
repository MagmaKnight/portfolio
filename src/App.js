import React from "react";
import "./index.css";
import SideBar from "./sidebar";
import { Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./pages/home";
import about from "./pages/about";
import projects from "./pages/projects";
import skills from "./pages/skills";
import contact from "./pages/contact";

export default function App() {
  return (
    <HashRouter>
      <div id="outer-container">
        <SideBar />
        <div className="pagewrap">
          <div className="content">
            <Route path="/pages/home" component={home} />
            <Route path="/pages/about" component={about} />
            <Route path="/pages/contact" component={contact} />
            <Route path="/pages/projects" component={projects} />
            <Route path="/pages/skills" component={skills} />
            <Route exact path='/' component={home} />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
