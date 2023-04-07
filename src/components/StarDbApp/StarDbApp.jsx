import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwapiServiceContext } from "../../contexts";
import CharactersPage from "../../pages/CharactersPage";
import HomePage from "../../pages/HomePage";
import PlanetsPage from "../../pages/PlanetsPage";
import StarshipsPage from "../../pages/StarshipsPage";
import SwapiService from "../../services/SwapiService";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import styles from "./StarDbApp.module.scss";

const swapiService = new SwapiService();

const StarDbApp = () => {
	const [isErrorThrown, setIsErrorThrown] = useState(false);
	const [isRestored, setIsRestored] = useState(false);
	const location = useLocation();

	const handleErrowThrow = () => {
		setIsErrorThrown(true);
		setIsRestored(false);
	};

	const handleRestore = () => {
		setIsErrorThrown(false);
		setIsRestored(true);
	};

	return (
		<SwapiServiceContext.Provider value={swapiService}>
			<div className={styles.StarDbApp}>
				<Header
					handleErrowThrow={handleErrowThrow}
					handleRestore={handleRestore}
				/>
				<main>
					<RandomPlanet
						isErrorThrown={isErrorThrown}
						isRestored={isRestored}
					/>
					<AnimatePresence mode="wait">
						<Routes key={location.pathname} location={location}>
							<Route
								path="/star-db-react"
								element={<HomePage styles={styles} />}
							/>
							<Route
								path="/star-db-react/characters"
								element={<CharactersPage />}
							/>
							<Route
								path="/star-db-react/planets"
								element={<PlanetsPage />}
							/>
							<Route
								path="/star-db-react/starships"
								element={<StarshipsPage />}
							/>
						</Routes>
					</AnimatePresence>
				</main>
			</div>
		</SwapiServiceContext.Provider>
	);
};

export default StarDbApp;
