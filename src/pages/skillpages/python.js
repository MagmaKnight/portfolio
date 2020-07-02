import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import python from "../../assets/python.svg.png";
import { withTranslation } from "react-i18next";
class pythonskill extends Component {
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
						<img src={python} className="skills2" alt="" />
						<h2>{t("python1")}</h2>
						<p className="jumbocontent">{t("python2")}</p>
						<h4>{t("python3")}</h4>
						<p>{t("python4")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default withTranslation()(pythonskill);
