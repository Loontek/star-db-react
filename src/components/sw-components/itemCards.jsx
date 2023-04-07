import { useContext } from "react";
import { SwapiServiceContext } from "../../contexts";
import Feature from "../Feature/Feature";
import ItemCard from "../ItemCard/ItemCard";

const CharacterCard = ({ selectedCharacter }) => {
	const { getCharacter, getCharacterImage } = useContext(SwapiServiceContext);

	return (
		<ItemCard
			selectedItem={selectedCharacter}
			getData={getCharacter}
			getImageUrl={getCharacterImage}
			category="character"
		>
			<Feature field="gender" label="Gender" />
			<Feature field="birthYear" label="Birth Year" />
			<Feature field="eyeColor" label="Eye color" />
		</ItemCard>
	);
};

const PlanetCard = ({ selectedPlanet }) => {
	const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

	return (
		<ItemCard
			selectedItem={selectedPlanet}
			getData={getPlanet}
			getImageUrl={getPlanetImage}
			category="planet"
		>
			<Feature field="population" label="Population" />
			<Feature field="rotationPeriod" label="Rotation period" />
			<Feature field="diameter" label="Diameter" />
		</ItemCard>
	);
};

const StarshipCard = ({ selectedStarship }) => {
	const { getStarship, getStarshipImage } = useContext(SwapiServiceContext);

	return (
		<ItemCard
			selectedItem={selectedStarship}
			getData={getStarship}
			getImageUrl={getStarshipImage}
			category="starship"
		>
			<Feature field="model" label="Model" />
			<Feature field="costInCredits" label="Cost in credits" />
			<Feature field="length" label="Length" />
			<Feature field="crew" label="Crew" />
			<Feature field="passengers" label="Passengers" />
			<Feature field="cargoCapacity" label="Cargo capacity" />
		</ItemCard>
	);
};

export { CharacterCard, PlanetCard, StarshipCard };
