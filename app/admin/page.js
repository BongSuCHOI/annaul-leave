import AdminHeader from '@app/admin/AdminHeader';
import UserList from '@app/admin/UserList';

const prefetchUsers = async () => {
	const res = await fetch('http://10.10.10.147:3000/api/user');

	if (!res.ok) throw new Error('Error!');

	const data = await res.json();

	return data;
};

export default async function AdminPage() {
	const usersData = await prefetchUsers();

	return (
		<div className="admin-wrap">
			<AdminHeader />
			<UserList prefetchUsers={usersData} />
		</div>
	);
}
