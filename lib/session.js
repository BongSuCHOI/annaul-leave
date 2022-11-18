export async function getSession(cookie) {
	try {
		const response = await fetch('http://10.10.10.147:3000/api/auth/session', {
			headers: { cookie },
		});
		const session = await response.json();
		return Object.keys(session).length > 0 ? session : null;
	} catch (err) {
		return null;
	}
}
