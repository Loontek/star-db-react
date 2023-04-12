import { imageBase } from "../constants";

export const getStarshipImage = (id) => {
	return `${imageBase}/starships/${id}.jpg`;
};
