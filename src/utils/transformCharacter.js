import { extractId } from "./extractId";

export const transformCharacter = (character) => {
	return {
		id: extractId(character),
		name: character.name,
		gender: character.gender,
		birthYear: character.birth_year,
		eyeColor: character.eye_color,
	};
};
