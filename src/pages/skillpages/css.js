import React, { Component } from "react";
import SkillSelection from "./default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import css from "../../assets/css-3.svg";
import { withTranslation } from "react-i18next";

class cssskill extends Component {
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
						<img src={css} className="skills2" alt="" />
						<h2>{t("css1")}</h2>
						<p className="jumbocontent">{t("css2")}</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default withTranslation()(cssskill);
