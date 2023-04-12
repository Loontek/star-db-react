import { useEffect, useState } from "react";
import { getStarship } from "../../api/services/Starship";
import { getStarshipImage } from "../../api/services/StarshipImage";
import { useData } from "../../hooks/useData";
import errorIcon from "../../assets/img/error.svg";
import Feature from "../shared/Feature/Feature";
import ItemCard from "../shared/ItemCard/ItemCard";
import styles from "./StarshipCard.module.scss";

const StarshipCard = ({ selectedItem }) => {
	const { data, image, isLoading, isError, updateData } = useData(
		getStarship,
		getStarshipImage
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
			description={"Oops... Death Star destroyed your starship"}
			choose={"starship"}
			handleErrowThrow={handleErrowThrow}
		>
			<Feature field="model" label="Model" />
			<Feature field="costInCredits" label="Cost in credits" />
			<Feature field="length" label="Length" />
			<Feature field="crew" label="Crew" />
			<Feature field="passengers" label="Passengers" />
			<Feature field="cargoCapacity" label="Cargo capacity" />
		</ItemCard>
	);
};

export default StarshipCard;
