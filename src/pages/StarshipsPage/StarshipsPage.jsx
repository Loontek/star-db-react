import { useState } from "react";
import RandomStarship from "../../components/RandomStarship/RandomStarship";
import Row from "../../components/UI/Row/Row";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import StarshipsList from "../../components/StarshipsList/StarshipsList";
import ErrorButton from "../../components/UI/ErrorButton/ErrorButton";
import RestoreButton from "../../components/UI/RestoreButton/RestoreButton";
import styles from "./StarshipsPage.module.scss";

const StarshipsPage = () => {
	const [selectedStarship, setSelectedStarship] = useState(null);
	const [isErrorThrown, setIsErrorThrown] = useState(false);
	const [isRestored, setIsRestored] = useState(false);

	const handleErrowThrow = () => {
		setIsErrorThrown(true);
		setIsRestored(false);
	};

	const handleRestore = () => {
		setIsErrorThrown(false);
		setIsRestored(true);
	};

	const handleStarshipSelect = (id) => {
		setSelectedStarship(id);
	};

	return (
		<>
			<RandomStarship
				isErrorThrown={isErrorThrown}
				isRestored={isRestored}
			/>
			<div className={styles.buttons}>
				<ErrorButton
					handleErrowThrow={handleErrowThrow}
					item={"starship"}
				/>
				<RestoreButton
					handleRestore={handleRestore}
					item={"starship"}
				/>
			</div>
			<Row
				left={<StarshipsList handleSelect={handleStarshipSelect} />}
				right={<StarshipCard selectedItem={selectedStarship} />}
			/>
		</>
	);
};

export default StarshipsPage;
