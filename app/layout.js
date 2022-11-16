import '@app/styles/reset.css';
import Providers from '@app/Providers';

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>연차 캘린더</title>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
