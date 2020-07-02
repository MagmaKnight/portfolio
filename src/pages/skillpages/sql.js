import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import sql from "../../assets/database.svg";
import { withTranslation } from "react-i18next";

class sqlskill extends Component {
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
						<img src={sql} className="skills2" alt="" />
						<h2>{t("sql1")}</h2>
						<p className="jumbocontent">{t("sql2")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}
export default withTranslation()(sqlskill);
