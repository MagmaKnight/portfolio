import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import react from "../../assets/react.png";
import { withTranslation } from "react-i18next";
import github from "../../assets/GitHub-Mark-32px.png";

class reactjsskill extends Component {
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
						<img src={react} className="skills2" alt="" />
						<h2>{t("reactjs1")}</h2>
						<p className="jumbocontent">{t("reactjs2")}</p>
						<p className="jumbocontent">{t("reactjs3")}</p>
						<a href="https://github.com/magmaknight/portfolio</Jumbotron>">
							<img src={github} className="skills3" alt="" />
						</a>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default withTranslation()(reactjsskill);
