import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import github from "../../assets/GitHub-Mark-32px.png";
import css from "../../assets/css-3.svg";
import sql from "../../assets/database.svg";
import html from "../../assets/html5.png";
import javascript from "../../assets/javascript.svg";
import office from "../../assets/office.svg";
import python from "../../assets/python.svg.png";
import react from "../../assets/react.png";
import php from "../../assets/php.svg";

export default class SkillSelection extends Component {
	render() {
		return (
			<div>
				<div>
					<OverlayTrigger
						overlay={<Tooltip id="skill-tooltip">Python 3</Tooltip>}
					>
						<NavLink to="/pages/skillpages/python">
							<img src={python} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger
						overlay={<Tooltip id="skill-tooltip">HTML 5</Tooltip>}
					>
						<NavLink to="/pages/skillpages/html">
							<img src={html} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger overlay={<Tooltip id="skill-tooltip">CSS 3</Tooltip>}>
						<NavLink to="/pages/skillpages/css">
							<img src={css} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger
						overlay={<Tooltip id="skill-tooltip">Javascript</Tooltip>}
					>
						<NavLink to="/pages/skillpages/javascript">
							<img src={javascript} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger
						overlay={<Tooltip id="skill-tooltip">ReactJS</Tooltip>}
					>
						<NavLink to="/pages/skillpages/reactjs">
							<img src={react} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger overlay={<Tooltip id="skill-tooltip">PHP</Tooltip>}>
						<NavLink to="/pages/skillpages/php">
							<img src={php} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger overlay={<Tooltip id="skill-tooltip">SQL</Tooltip>}>
						<NavLink to="/pages/skillpages/sql">
							<img src={sql} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger
						overlay={<Tooltip id="skill-tooltip">Office Tools</Tooltip>}
					>
						<NavLink to="/pages/skillpages/office">
							<img src={office} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
					<OverlayTrigger overlay={<Tooltip id="skill-tooltip">Git</Tooltip>}>
						<NavLink to="/pages/skillpages/git">
							<img src={github} className="skills" alt="" />
						</NavLink>
					</OverlayTrigger>
				</div>
			</div>
		);
	}
}
