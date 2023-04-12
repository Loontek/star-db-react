import { useCallback, useEffect, useState } from "react";

export const useData = (getData, getImage) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [image, setImage] = useState(null);

	const onDataLoaded = useCallback((data) => {
		setData(data);
		setIsLoading(false);
	}, []);

	const onError = useCallback((err) => {
		setIsError(true);
		console.log(err);
	}, []);

	const updateData = useCallback(
		(id) => {
			setIsError(false);
			setIsLoading(true);

			setTimeout(() => {
				const res = id ? getData(id) : getData();

				id ? setImage(getImage(id)) : null;

				res.then(onDataLoaded).catch(onError);
			}, 1000);
		},
		[data]
	);

	// useEffect(() => {
	// 	setIsError(false);
	// }, [data]);

	return {
		data,
		image,
		isLoading,
		isError,
		updateData,
	};
};
