import '@app/styles/reset.css';
import Providers from '@app/Providers';
import { headers } from 'next/headers';
import { getSession } from '@lib/session';

export default async function RootLayout({ children }) {
	const session = await getSession(headers().get('cookie') ?? '');

	return (
		<html>
			<head>
				<title>연차 캘린더</title>
			</head>
			<body>
				<Providers session={session}>{children}</Providers>
			</body>
		</html>
	);
}
