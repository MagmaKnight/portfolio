import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import html from "../../assets/html5.png";
import github from "../../assets/GitHub-Mark-32px.png";
import { withTranslation } from "react-i18next";
class htmlskill extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<div>
					<h2>{t("skill1")}</h2>
				</div>
				<SkillSelection />
				<div>
					<Jumbotron>
						<img src={html} className="skills2" alt="" />
						<h2>{t("html1")}</h2>
						<p className="jumbocontent">{t("html2")}</p>
						<a href="https://github.com/magmaknight/instinct">
							<img src={github} className="skills3" alt="" />
						</a>
					</Jumbotron>
				</div>
			</div>
		);
	}
}
export default withTranslation()(htmlskill);
