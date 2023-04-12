import { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharactersList from "../../components/CharactersList/CharactersList";
import RandomCharacter from "../../components/RandomCharacter/RandomCharacter";
import Row from "../../components/UI/Row/Row";
import ErrorButton from "../../components/UI/ErrorButton/ErrorButton";
import RestoreButton from "../../components/UI/RestoreButton/RestoreButton";
import styles from "./CharactersPage.module.scss";

const CharactersPage = () => {
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [isErrorThrown, setIsErrorThrown] = useState(false);
	const [isRestored, setIsRestored] = useState(false);

	const handleErrowThrow = () => {
		setIsErrorThrown(true);
		setIsRestored(false);
	};

	const handleRestore = () => {
		setIsErrorThrown(false);
		setIsRestored(true);
	};

	const handleCharacterSelect = (id) => {
		setSelectedCharacter(id);
	};

	return (
		<>
			<RandomCharacter
				isErrorThrown={isErrorThrown}
				isRestored={isRestored}
			/>
			<div className={styles.buttons}>
				<ErrorButton
					handleErrowThrow={handleErrowThrow}
					item={"character"}
				/>
				<RestoreButton
					handleRestore={handleRestore}
					item={"character"}
				/>
			</div>
			<Row
				left={<CharactersList handleSelect={handleCharacterSelect} />}
				right={<CharacterCard selectedItem={selectedCharacter} />}
			/>
		</>
	);
};

export default CharactersPage;
