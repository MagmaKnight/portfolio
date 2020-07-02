import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import javascript from "../../assets/javascript.svg";
import { withTranslation } from "react-i18next";
class javascriptskill extends Component {
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
						<img src={javascript} className="skills2" alt="" />
						<h2>{t("javascript1")}</h2>
						<p className="jumbocontent">{t("javascript2")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}
export default withTranslation()(javascriptskill);
