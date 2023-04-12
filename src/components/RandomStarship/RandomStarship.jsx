import { getStarship } from "../../api/services/Starship";
import { getStarshipImage } from "../../api/services/StarshipImage";
import useRandomData from "../../hooks/useRandomData";
import RandomItem from "../shared/RandomItem/RandomItem";
import Feature from "../shared/Feature/Feature";
import errorIcon from "../../assets/img/error.svg";
import styles from "./RandomStarship.module.scss";

const RandomStarship = ({ isErrorThrown, isRestored }) => {
	const { data, image, isLoading, isError } = useRandomData(
		getStarship,
		getStarshipImage,
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
			description={"Oops... Death Star destroyed your starship"}
			key="content"
		>
			<Feature field="model" label="Model" />
			<Feature field="costInCredits" label="Cost in credits" />
			<Feature field="length" label="Length" />
		</RandomItem>
	);
};

export default RandomStarship;
