import React, { Component } from "react";
import { withTranslation } from "react-i18next";
class about extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<h1>{t('card3')}</h1>
				<hr></hr>
				<h3>{t('personal')}</h3>
				<p>
        {t('abouttext1')}
				</p>
				<p>
        {t('abouttext2')}
				</p>
				<hr></hr>
				<h3>{t('education')}</h3>
				<h4>{t('educationlevel')}</h4>
				<h5>{t('fecap')}</h5>
				<p className="smalltext">{t('smallfecap1')}</p>
				<p className="smalltext">
        {t('smallfecap2')}
				</p>
				<hr></hr>
				<h3>{t('job')}</h3>
				<p> {t('jobtext')}</p>
			</div>
		);
	}
}

export default withTranslation()(about);
