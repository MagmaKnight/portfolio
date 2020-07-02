import React, { Component } from "react";
import SkillSelection from "./skillpages/default.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withTranslation } from "react-i18next";
class skills extends Component {
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
						<h2>{t("skill2")}</h2>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default withTranslation()(skills);
