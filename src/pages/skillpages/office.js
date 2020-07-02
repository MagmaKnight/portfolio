import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import office from "../../assets/office.svg";
import { withTranslation } from "react-i18next";
class officeskill extends Component {
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
						<img src={office} className="skills2" alt="" />
						<h2>{t("office1")}</h2>
						<p className="jumbocontent">{t("office2")}</p>
						<p className="jumbocontent">{t("office3")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}
export default withTranslation()(officeskill);
