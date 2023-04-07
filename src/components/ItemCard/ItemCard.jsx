import styles from "./ItemCard.module.scss";
import errorIcon from "../../assets/img/darth-vader-svgrepo-com.svg";
import { useEffect, useState } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Loader from "../Loader/Loader";
import ItemCardRender from "./ItemCardRender";
import { useData } from "../../hooks/useData";
import { AnimatePresence } from "framer-motion";

const ItemCard = ({
	selectedItem,
	getData,
	getImageUrl,
	category,
	children,
}) => {
	const { data, isLoading, isError, updateData } = useData(getData);
	const [image, setImage] = useState(null);
	const [isErrorThrown, setIsErrorThrown] = useState(false);

	useEffect(() => {
		if (!selectedItem) return;

		setIsErrorThrown(false);

		updateData(selectedItem);
	}, [selectedItem]);

	useEffect(() => {
		if (!selectedItem) return;

		setImage(getImageUrl(selectedItem));
	}, [data]);

	return (
		<article className={styles.ItemCard}>
			<AnimatePresence mode="wait">
				{!selectedItem ? (
					<ErrorIndicator
						description={`Choose ${category}`}
						key="choose"
					/>
				) : isError || isErrorThrown ? (
					<ErrorIndicator
						icon={errorIcon}
						description={"Darth Vader got there first"}
						key="error"
					/>
				) : isLoading ? (
					<Loader isLoading={isLoading} key="loader" />
				) : (
					<ItemCardRender
						item={data}
						isLoading={isLoading}
						image={image}
						setIsErrorThrown={setIsErrorThrown}
						key="content"
					>
						{children}
					</ItemCardRender>
				)}
			</AnimatePresence>
		</article>
	);

	// const [item, setItem] = useState({});
	// const [isLoading, setIsLoading] = useState(true);
	// const [isError, setIsError] = useState(false);
	// const [showContent, setShowContent] = useState(false);

	// const onItemLoaded = (item) => {
	// 	setItem(item);
	// 	setImage(getImageUrl(selectedItem));
	// 	setIsLoading(false);
	// 	setTimeout(() => {
	// 		setShowContent(true);
	// 	}, 300);
	// };

	// const onError = (err) => {
	// 	setIsError(true);
	// 	console.log(err);
	// };

	// const updateItem = useCallback(() => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		setShowContent(false);
	// 	}, 300);

	// 	setTimeout(() => {
	// 		getData(selectedItem).then(onItemLoaded).catch(onError);
	// 	}, 500);
	// }, [getData]);

	// useEffect(() => {
	// 	if (!selectedItem) return;

	// 	updateItem();
	// }, []);

	// useEffect(() => {
	// 	if (!selectedItem) return;

	// 	setIsError(false);

	// 	updateItem();
	// }, [selectedItem]);
};

export default ItemCard;
