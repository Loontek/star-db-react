import { transformStarship } from "../../utils/transformStarship";
import { getResource } from "../getResource";

export const getStarship = async (id) => {
	const starship = await getResource(`/starships/${id}`);

	return transformStarship(starship);
};
