import { transformStarship } from "../../utils/transformStarship";
import { getResource } from "../getResource";

export const getAllStarships = async () => {
	const res = await getResource("/starships/");

	return res.results.map(transformStarship);
};
