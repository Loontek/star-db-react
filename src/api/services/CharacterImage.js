import { imageBase } from "../constants";

export const getCharacterImage = (id) => {
	return `${imageBase}/characters/${id}.jpg`;
};
