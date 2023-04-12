import { getResource } from "../getResource";
import { transformPlanet } from "../../utils/transformPlanet";

export const getAllPlanets = async () => {
	const res = await getResource("/planets/");

	return res.results.map(transformPlanet);
};
