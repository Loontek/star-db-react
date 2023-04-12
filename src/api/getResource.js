import { apiBase } from "./constants";

export const getResource = async (url) => {
	const res = await fetch(`${apiBase}${url}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
	}

	return res.json();
};
