import { transformPlanet } from "../../utils/transformPlanet";
import { getResource } from "../getResource";

export const getPlanet = async (id) => {
	const planet = await getResource(`/planets/${id}`);

	return transformPlanet(planet);
};
