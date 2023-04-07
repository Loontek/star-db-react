import { useContext } from "react";
import { SwapiServiceContext } from "../../contexts";
import ItemsList from "../ItemsList/ItemsList";

const CharactersList = ({ handleCharacterSelect }) => {
	const { getAllCharacters } = useContext(SwapiServiceContext);

	return (
		<ItemsList
			handleSelect={handleCharacterSelect}
			getData={getAllCharacters}
		>
			{(i) => `${i.name} (${i.birthYear})`}
		</ItemsList>
	);
};

const PlanetsList = ({ handlePlanetSelect }) => {
	const { getAllPlanets } = useContext(SwapiServiceContext);

	return (
		<ItemsList handleSelect={handlePlanetSelect} getData={getAllPlanets}>
			{(i) => `${i.name} (${i.diameter})`}
		</ItemsList>
	);
};

const StarshipsList = ({ handleStarshipSelect }) => {
	const { getAllStarships } = useContext(SwapiServiceContext);

	return (
		<ItemsList
			handleSelect={handleStarshipSelect}
			getData={getAllStarships}
		>
			{(i) => `${i.name} (${i.model})`}
		</ItemsList>
	);
};

export { CharactersList, PlanetsList, StarshipsList };
