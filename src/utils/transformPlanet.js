import { extractId } from "./extractId";

export const transformPlanet = (planet) => {
	return {
		id: extractId(planet),
		name: planet.name,
		population: planet.population,
		rotationPeriod: planet.rotation_period,
		diameter: planet.diameter,
	};
};
