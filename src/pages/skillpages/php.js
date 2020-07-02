import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import php from "../../assets/php.svg";
import { withTranslation } from "react-i18next";
class phpskill extends Component {
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
						<img src={php} className="skills2" alt="" />
						<h2>{t("php1")}</h2>
						<p className="jumbocontent">{t("php2")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}
export default withTranslation()(phpskill);
