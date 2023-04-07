import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Row from "../components/Row/Row";
import { CharacterCard, CharactersList } from "../components/sw-components";

const CharactersPage = () => {
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	const handleCharacterSelect = (id) => {
		setSelectedCharacter(id);
	};

	return (
		<AnimatedPage>
			<Row
				left={
					<CharactersList
						handleCharacterSelect={handleCharacterSelect}
					/>
				}
				right={<CharacterCard selectedCharacter={selectedCharacter} />}
			/>
		</AnimatedPage>
	);
};

export default CharactersPage;
