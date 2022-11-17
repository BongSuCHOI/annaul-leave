export const fetchGET = async (url) => {
	const res = await fetch(url, { cache: 'no-store' });
	if (!res.ok) throw new Error(`[${res.status}]${res.statusText}`);
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

	const res = await fetch(url, options, { cache: 'no-store' });
	if (!res.ok) throw new Error(`[${res.status}]${res.statusText}`);
	const data = await res.json();

	return data;
};
