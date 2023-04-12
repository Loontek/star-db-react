import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CharactersPage from "./pages/CharactersPage";
import HomePage from "./pages/HomePage";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import "./App.module.scss";
import StarDbApp from "./components/StarDbApp/StarDbApp";

function App() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="star-db-react" element={<StarDbApp />}>
					<Route index element={<HomePage />} />
					<Route path="characters" element={<CharactersPage />} />
					<Route path="planets" element={<PlanetsPage />} />
					<Route path="starships" element={<StarshipsPage />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

export default App;
