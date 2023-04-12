import { useState } from "react";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import PlanetsList from "../../components/PlanetsList/PlanetsList";
import RandomPlanet from "../../components/RandomPlanet/RandomPlanet";
import Row from "../../components/UI/Row/Row";
import ErrorButton from "../../components/UI/ErrorButton/ErrorButton";
import RestoreButton from "../../components/UI/RestoreButton/RestoreButton";
import styles from "./PlanetsPage.module.scss";

const PlanetsPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState(null);
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

	const handlePlanetSelect = (id) => {
		setSelectedPlanet(id);
	};

	return (
		<>
			<RandomPlanet
				isErrorThrown={isErrorThrown}
				isRestored={isRestored}
			/>
			<div className={styles.buttons}>
				<ErrorButton
					handleErrowThrow={handleErrowThrow}
					item={"planet"}
				/>
				<RestoreButton handleRestore={handleRestore} item={"planet"} />
			</div>
			<Row
				left={<PlanetsList handleSelect={handlePlanetSelect} />}
				right={<PlanetCard selectedItem={selectedPlanet} />}
			/>
		</>
	);
};

export default PlanetsPage;
