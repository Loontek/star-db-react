import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Row from "../components/Row/Row";
import { StarshipCard, StarshipsList } from "../components/sw-components";

const StarshipsPage = () => {
	const [selectedStarship, setSelectedStarship] = useState(null);

	const handleStarshipSelect = (id) => {
		setSelectedStarship(id);
	};

	return (
		<AnimatedPage>
			<Row
				left={
					<StarshipsList
						handleStarshipSelect={handleStarshipSelect}
					/>
				}
				right={<StarshipCard selectedStarship={selectedStarship} />}
			/>
		</AnimatedPage>
	);
};

export default StarshipsPage;
