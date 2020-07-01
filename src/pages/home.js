import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<div>
			<h1>{t("intro", "Welcome there")}</h1>
			<p>
				{t(
					"intro2",
					"Hello, my name is Luchas Arie, I'm a student from Brazil that loves all things computers"
				)}
			</p>
			<p>
				{t(
					"intro3",
					"Check out my projects, skills, some info about me, and contact information, by clicking on the volcano on the top left corner."
				)}
			</p>
		</div>
	);
};
export default Home;
