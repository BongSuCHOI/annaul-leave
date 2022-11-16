export async function getSession(cookie) {
	const response = await fetch('http://10.10.10.147:3000/api/auth/session', {
		headers: { cookie },
	});

	if (!response?.ok) {
		return null;
	}

	const session = await response.json();
	return Object.keys(session).length > 0 ? session : null;
}
