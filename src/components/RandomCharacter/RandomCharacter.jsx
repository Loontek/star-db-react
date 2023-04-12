import { getCharacter } from "../../api/services/Character";
import { getCharacterImage } from "../../api/services/CharacterImage";
import useRandomData from "../../hooks/useRandomData";
import RandomItem from "../shared/RandomItem/RandomItem";
import Feature from "../shared/Feature/Feature";
import errorIcon from "../../assets/img/darth-vader-svgrepo-com.svg";
import styles from "./RandomCharacter.module.scss";

const RandomCharacter = ({ isErrorThrown, isRestored }) => {
	const { data, image, isLoading, isError } = useRandomData(
		getCharacter,
		getCharacterImage,
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
			description={"Oops... Darth Vader killed your character"}
			key="content"
		>
			<Feature field="gender" label="Gender" />
			<Feature field="birthYear" label="Birth Year" />
			<Feature field="eyeColor" label="Eye color" />
		</RandomItem>
	);
};

export default RandomCharacter;
