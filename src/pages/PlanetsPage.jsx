import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Row from "../components/Row/Row";
import { PlanetCard, PlanetsList } from "../components/sw-components";

const PlanetsPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState(null);

	const handlePlanetSelect = (id) => {
		setSelectedPlanet(id);
	};

	return (
		<AnimatedPage>
			<Row
				left={<PlanetsList handlePlanetSelect={handlePlanetSelect} />}
				right={<PlanetCard selectedPlanet={selectedPlanet} />}
			/>
		</AnimatedPage>
	);
};

export default PlanetsPage;
