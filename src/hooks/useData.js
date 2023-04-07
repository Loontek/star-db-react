import { useCallback, useState } from "react";

export const useData = (getData) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const onDataLoaded = useCallback((data) => {
		setData(data);
		setIsLoading(false);
	}, []);

	const onError = useCallback((err) => {
		setIsError(true);
		console.log(err);
	}, []);

	const updateData = useCallback((id) => {
		setIsLoading(true);

		setTimeout(() => {
			const res = id ? getData(id) : getData();

			res.then(onDataLoaded).catch(onError);
		}, 1000);
	}, []);

	return {
		data,
		isLoading,
		isError,
		updateData,
	};
};
