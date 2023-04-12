import { transformCharacter } from "../../utils/transformCharacter";
import { getResource } from "../getResource";

export const getCharacter = async (id) => {
	const character = await getResource(`/people/${id}`);

	return transformCharacter(character);
};
