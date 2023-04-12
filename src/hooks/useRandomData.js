import { useEffect, useState } from "react";
import { useData } from "./useData";

const createInterval = (updateData) => {
	const interval = setInterval(() => {
		const id = Math.floor(Math.random() * 15) + 2;

		// console.log("planet: ", id);

		updateData(id);
	}, 30000);

	return interval;
};

const update = (updateData, set) => {
	const id = Math.floor(Math.random() * 15) + 2;

	updateData(id);

	const interval = createInterval(updateData);

	set(interval);

	return interval;
};

const useRandomData = (getData, getImage, isErrorThrown, isRestored) => {
	const { data, image, isLoading, isError, updateData } = useData(
		getData,
		getImage
	);
	const [customInterval, setCustomInterval] = useState(null);

	// console.log(customInterval);

	useEffect(() => {
		const interval = update(updateData, setCustomInterval);

		return () => {
			// console.log(1);
			clearInterval(interval);
			// console.log("unmount", customInterval);
			// clearInterval(customInterval);
		};
	}, []);

	useEffect(() => {
		// console.log(customInterval);

		return () => {
			// console.log(2);
			clearInterval(customInterval);
		};
	}, [customInterval]);

	useEffect(() => {
		if (!isErrorThrown) return;

		clearInterval(customInterval);

		updateData(12000);
	}, [isErrorThrown]);

	useEffect(() => {
		if (!isRestored) return;

		update(updateData, setCustomInterval);
	}, [isRestored]);

	return {
		data,
		image,
		isLoading,
		isError,
	};
};

export default useRandomData;
