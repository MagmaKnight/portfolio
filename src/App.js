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
import pythonskill from "./pages/skillpages/python";
import cssskill from "./pages/skillpages/css";
import htmlskill from "./pages/skillpages/html";
import javascriptskill from "./pages/skillpages/javascript";
import gitskill from "./pages/skillpages/git";
import officeskill from "./pages/skillpages/office";
import reactjsskill from "./pages/skillpages/reactjs";
import sqlskill from "./pages/skillpages/sql";
import phpskill from "./pages/skillpages/php";


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
            <Route exact path="/pages/skills" component={skills} />
            <Route path="/pages/skillpages/python" component={pythonskill} />
            <Route path="/pages/skillpages/css" component={cssskill} />
            <Route path="/pages/skillpages/html" component={htmlskill} />
            <Route path="/pages/skillpages/javascript" component={javascriptskill} />
            <Route path="/pages/skillpages/php" component={phpskill} />
            <Route path="/pages/skillpages/sql" component={sqlskill} />
            <Route path="/pages/skillpages/git" component={gitskill} />
            <Route path="/pages/skillpages/reactjs" component={reactjsskill} />
            <Route path="/pages/skillpages/office" component={officeskill} />
            <Route exact path='/' component={home} />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
