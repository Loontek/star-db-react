import { extractId } from "./extractId";

export const transformStarship = (starship) => {
	return {
		id: extractId(starship),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.costInCredits,
		length: starship.length,
		crew: starship.crew,
		passengers: starship.passengers,
		cargoCapacity: starship.cargoCapacity,
	};
};
