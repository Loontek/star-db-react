import { useContext, useEffect, useState } from "react";
import styles from "./RandomPlanet.module.scss";
import Loader from "../Loader/Loader";
import RandomPlanetRender from "./RandomPlanetRender";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import errorIcon from "../../assets/img/error.svg";
import { useData } from "../../hooks/useData";
import { SwapiServiceContext } from "../../contexts";
import { AnimatePresence } from "framer-motion";

const RandomPlanet = ({ isErrorThrown, isRestored }) => {
	const { getPlanet } = useContext(SwapiServiceContext);
	const { data, isLoading, isError, updateData } = useData(getPlanet);
	const [planetsInterval, setPlanetsInterval] = useState(null);

	useEffect(() => {
		const id = isErrorThrown ? 12000 : Math.floor(Math.random() * 15) + 2;

		updateData(id);

		const interval = setInterval(() => {
			const id = isErrorThrown
				? 12000
				: Math.floor(Math.random() * 15) + 2;
			updateData(id);
		}, 20000);

		setPlanetsInterval(interval);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!isErrorThrown) return;

		clearInterval(planetsInterval);
	}, [isErrorThrown]);

	useEffect(() => {
		if (!isRestored) return;

		clearInterval(planetsInterval);

		const interval = setInterval(() => {
			const id = isErrorThrown
				? 12000
				: Math.floor(Math.random() * 15) + 2;
			updateData(id);
		}, 20000);

		setPlanetsInterval(interval);
	}, [isRestored]);

	return (
		<div className={styles.RandomPlanet}>
			<AnimatePresence mode="wait">
				{isError || isErrorThrown ? (
					<ErrorIndicator
						icon={errorIcon}
						description={"Oops... Death Star destroyed your planet"}
						key="error"
					/>
				) : isLoading ? (
					<Loader isLoading={isLoading} key="loader" />
				) : (
					<RandomPlanetRender
						planet={data}
						isLoading={isLoading}
						key="content"
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default RandomPlanet;
