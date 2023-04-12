import { getPlanet } from "../../api/services/Planet";
import { getPlanetImage } from "../../api/services/PlanetImage";
import useRandomData from "../../hooks/useRandomData";
import RandomItem from "../shared/RandomItem/RandomItem";
import Feature from "../shared/Feature/Feature";
import errorIcon from "../../assets/img/error.svg";
import styles from "./RandomPlanet.module.scss";

const RandomPlanet = ({ isErrorThrown, isRestored }) => {
	const { data, image, isLoading, isError } = useRandomData(
		getPlanet,
		getPlanetImage,
		isErrorThrown,
		isRestored
	);

	return (
		<RandomItem
			item={data}
			image={image}
			isLoading={isLoading}
			isError={isError}
			errorIcon={errorIcon}
			description={"Oops... Death Star destroyed your planet"}
			key="content"
		>
			<Feature field="population" label="Population" />
			<Feature field="rotationPeriod" label="Rotation period" />
			<Feature field="diameter" label="Diameter" />
		</RandomItem>
	);
};

export default RandomPlanet;
