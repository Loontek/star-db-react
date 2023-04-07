import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Loader from "../Loader/Loader";
import ItemsListRender from "./ItemsListRender";
import styles from "./ItemsList.module.scss";
import { useData } from "../../hooks/useData";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const ItemsList = ({ handleSelect, getData, children }) => {
	const { data, isLoading, isError, updateData } = useData(getData);

	useEffect(() => {
		updateData();
	}, []);

	return (
		<div className={styles.ItemsList}>
			<AnimatePresence mode="wait">
				{isError ? (
					<ErrorIndicator description={"No list"} key="error" />
				) : isLoading ? (
					<Loader isLoading={isLoading} key="loader" />
				) : (
					<ItemsListRender
						list={data}
						isLoading={isLoading}
						handleSelect={handleSelect}
						key="content"
					>
						{children}
					</ItemsListRender>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ItemsList;
