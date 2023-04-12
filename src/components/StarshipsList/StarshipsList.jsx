import { useEffect } from "react";
import { getAllStarships } from "../../api/services/Starships";
import { useData } from "../../hooks/useData";
import ItemsList from "../shared/ItemsList/ItemsList";
import styles from "./StarshipsList.module.scss";

const StarshipsList = ({ handleSelect }) => {
	const { data, isLoading, isError, updateData } = useData(getAllStarships);

	useEffect(() => {
		updateData();
	}, []);

	return (
		<ItemsList
			list={data}
			isLoading={isLoading}
			isError={isError}
			handleSelect={handleSelect}
			key="content"
		>
			{(i) => `${i.name} (${i.model})`}
		</ItemsList>
	);
};

export default StarshipsList;
