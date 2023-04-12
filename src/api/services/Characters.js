import { transformCharacter } from "../../utils/transformCharacter";
import { getResource } from "../getResource";

export const getAllCharacters = async () => {
	const res = await getResource("/people/");

	return res.results.map(transformCharacter);
};
