import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import github from "../../assets/GitHub-Mark-32px.png";
import { withTranslation } from "react-i18next";
class gitskill extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<div>
					<h2>{t("skill1)")}</h2>
				</div>
				<SkillSelection />
				<div>
					<Jumbotron>
						<a href="https://github.com/magmaknight">
							<img src={github} className="skills3" alt="" />
						</a>
						<h2>{t("git1")}</h2>
						<p className="jumbocontent">{t("git2")}</p>
						<p className="jumbocontent">{t("git3")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default withTranslation()(gitskill);
