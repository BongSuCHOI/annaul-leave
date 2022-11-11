import './styles/reset.css';
import GlobalProvider from '../store/GlobalProvider';
import ReactQueryWrapper from './ReactQueryWrapper';

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>연차 캘린더</title>
			</head>
			<body>
				<ReactQueryWrapper>
					<GlobalProvider>{children}</GlobalProvider>
				</ReactQueryWrapper>
			</body>
		</html>
	);
}
