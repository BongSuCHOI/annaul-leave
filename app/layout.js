import './styles/reset.css';
import GlobalProvider from '../store/GlobalProvider';

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>연차 캘린더</title>
			</head>
			<body>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
