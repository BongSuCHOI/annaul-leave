export const fetchGET = async (url) => {
	const res = await fetch(url);
	if (!res.ok) throw new Error('Error!');
	const data = await res.json();

	return data;
};

export const fetchPOST = async (url, body) => {
	const options = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	};

	const res = await fetch(url, options);
	if (!res.ok) throw new Error('Error!');
	const data = await res.json();

	return data;
};
