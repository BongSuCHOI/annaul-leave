import './styles/reset.css';
import GlobalProvider from '../store/GlobalProvider';

async function getData() {
	const res = await fetch('http://localhost:3000/api/user');
	const a = await res.json();
	console.log(a);
	return res.json();
}

export default function RootLayout({ children }) {
	getData();
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
