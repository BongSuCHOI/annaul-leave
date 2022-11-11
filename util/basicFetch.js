import { useQuery, useMutation } from '@tanstack/react-query';

const baseURL = 'http://10.10.10.147:3000/api/user';

const basicFetchGET = async (url) => {
	const res = await fetch(url);
	if (!res.ok) throw new Error('Error!');
	const data = await res.json();

	return data;
};

const basicFetchPOST = async (url, body) => {
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

// get User
export const useGetUserInfo = () => {
	const queryUrl = baseURL + '?dbMethod=findOne';
	return useMutation({
		mutationFn: (userInfo) => basicFetchPOST(queryUrl, userInfo),
	});
};

// get All Users
export const useGetAllUserInfo = (prefetchUsers) => {
	return useQuery({
		queryKey: ['allUser'],
		queryFn: () => basicFetchGET(baseURL),
		initialData: prefetchUsers,
	});
};

// create User
export const useCreateUser = () => {
	const queryUrl = baseURL + '?dbMethod=create';
	return useMutation({
		mutationFn: (userInfo) => basicFetchPOST(queryUrl, userInfo),
	});
};

// delete User
export const useDeleteUser = () => {
	const queryUrl = baseURL + '?dbMethod=destroy';
	return useMutation({
		mutationFn: (pk) => basicFetchPOST(queryUrl, pk),
	});
};
