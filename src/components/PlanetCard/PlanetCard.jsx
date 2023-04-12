import { useEffect, useState } from "react";
import { getPlanet } from "../../api/services/Planet";
import { getPlanetImage } from "../../api/services/PlanetImage";
import { useData } from "../../hooks/useData";
import errorIcon from "../../assets/img/error.svg";
import Feature from "../shared/Feature/Feature";
import ItemCard from "../shared/ItemCard/ItemCard";
import styles from "./PlanetCard.module.scss";

const PlanetCard = ({ selectedItem }) => {
	const { data, image, isLoading, isError, updateData } = useData(
		getPlanet,
		getPlanetImage
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
			description={"Oops... Death Star destroyed your planet"}
			choose={"planet"}
			handleErrowThrow={handleErrowThrow}
		>
			<Feature field="population" label="Population" />
			<Feature field="rotationPeriod" label="Rotation period" />
			<Feature field="diameter" label="Diameter" />
		</ItemCard>
	);
};

export default PlanetCard;
