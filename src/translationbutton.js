import React from "react";
import "./translationbutton.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const TranslationButton = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className="translationbutton">
			<form>
				<Button
					variant="translationbutton2"
					onClick={() => changeLanguage("pt")}
				>
					PT
				</Button>
				<Button
					variant="translationbutton2"
					onClick={() => changeLanguage("en")}
				>
					EN
				</Button>
			</form>
		</div>
	);
};
export default TranslationButton;
