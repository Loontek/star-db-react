// import { useContext } from "react";
// import { SwapiServiceContext } from "../../contexts";
// import Feature from "../Feature/Feature";
// import RandomItem from "../RandomItem/RandomPlanet";

// const RandomCharacter = (props) => {
// 	const { getCharacter, getCharacterImage } = useContext(SwapiServiceContext);

// 	return (
// 		<RandomItem
// 			getData={getCharacter}
// 			getImage={getCharacterImage}
// 			{...props}
// 		>
// 			<Feature field="gender" label="Gender" />
// 			<Feature field="birthYear" label="Birth Year" />
// 			<Feature field="eyeColor" label="Eye color" />
// 		</RandomItem>
// 	);
// };

// const RandomPlanet = (props) => {
// 	const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

// 	return (
// 		<RandomItem getData={getPlanet} getImage={getPlanetImage} {...props}>
// 			<Feature field="population" label="Population" />
// 			<Feature field="rotationPeriod" label="Rotation period" />
// 			<Feature field="diameter" label="Diameter" />
// 		</RandomItem>
// 	);
// };

// const RandomStarship = (props) => {
// 	const { getStarship, getStarshipImage } = useContext(SwapiServiceContext);

// 	return (
// 		<RandomItem
// 			getData={getStarship}
// 			getImage={getStarshipImage}
// 			{...props}
// 		>
// 			<Feature field="model" label="Model" />
// 			<Feature field="costInCredits" label="Cost in credits" />
// 			<Feature field="length" label="Length" />
// 			<Feature field="crew" label="Crew" />
// 			<Feature field="passengers" label="Passengers" />
// 			<Feature field="cargoCapacity" label="Cargo capacity" />
// 		</RandomItem>
// 	);
// };

// export { RandomCharacter, RandomPlanet, RandomStarship };
