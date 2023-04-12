import { useEffect, useState } from "react";
import { getCharacter } from "../../api/services/Character";
import { getCharacterImage } from "../../api/services/CharacterImage";
import { useData } from "../../hooks/useData";
import errorIcon from "../../assets/img/darth-vader-svgrepo-com.svg";
import Feature from "../shared/Feature/Feature";
import ItemCard from "../shared/ItemCard/ItemCard";
import styles from "./CharacterCard.module.scss";

const CharacterCard = ({ selectedItem }) => {
	const { data, image, isLoading, isError, updateData } = useData(
		getCharacter,
		getCharacterImage
	);
	const [isErrorThrown, setIsErrorThrown] = useState(false);

	const handleErrowThrow = () => {
		setIsErrorThrown(true);
	};

	useEffect(() => {
		if (!selectedItem) return;

		setIsErrorThrown(false);

		updateData(selectedItem);
	}, [selectedItem]);

	useEffect(() => {
		if (!isErrorThrown) return;

		updateData(12000);
	}, [isErrorThrown]);

	return (
		<ItemCard
			item={data}
			image={image}
			selectedItem={selectedItem}
			isLoading={isLoading}
			isError={isError}
			errorIcon={errorIcon}
			description={"Darth Vader got there first"}
			choose={"character"}
			handleErrowThrow={handleErrowThrow}
		>
			<Feature field="gender" label="Gender" />
			<Feature field="birthYear" label="Birth Year" />
			<Feature field="eyeColor" label="Eye color" />
		</ItemCard>
	);
};

export default CharacterCard;
