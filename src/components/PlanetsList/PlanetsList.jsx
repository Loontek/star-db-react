import { useEffect } from "react";
import { getAllPlanets } from "../../api/services/Planets";
import { useData } from "../../hooks/useData";
import ItemsList from "../shared/ItemsList/ItemsList";
import styles from "./PlanetsList.module.scss";

const PlanetsList = ({ handleSelect }) => {
	const { data, isLoading, isError, updateData } = useData(getAllPlanets);

	useEffect(() => {
		updateData();
	}, []);

	return (
		<ItemsList
			list={data}
			isLoading={isLoading}
			isError={isError}
			handleSelect={handleSelect}
		>
			{(i) => `${i.name} (${i.diameter})`}
		</ItemsList>
	);
};

export default PlanetsList;
