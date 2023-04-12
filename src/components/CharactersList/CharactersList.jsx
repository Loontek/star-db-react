import { useEffect } from "react";
import { getAllCharacters } from "../../api/services/Characters";
import { useData } from "../../hooks/useData";
import ItemsList from "../shared/ItemsList/ItemsList";
import styles from "./CharactersList.module.scss";

const CharactersList = ({ handleSelect }) => {
	const { data, isLoading, isError, updateData } = useData(getAllCharacters);

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
			{(i) => `${i.name} (${i.birthYear})`}
		</ItemsList>
	);
};

export default CharactersList;
