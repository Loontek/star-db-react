import { imageBase } from "../constants";

export const getPlanetImage = (id) => {
	return `${imageBase}/planets/${id}.jpg`;
};
