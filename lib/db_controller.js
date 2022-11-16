import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchGET, fetchPOST } from '@lib/basicFetch';

const baseURL = 'http://10.10.10.147:3000/api';

// get User
export const useGetUser = ({ id }) => {
	const url = baseURL + `/user/${id}`;
	return useQuery({
		queryKey: ['user'],
		queryFn: () => fetchGET(url),
	});
};

// get All Users
export const useGetAllUser = (prefetchUsers) => {
	const url = baseURL + '/user';
	return useQuery({
		queryKey: ['allUser'],
		queryFn: () => fetchGET(url),
		initialData: prefetchUsers,
	});
};

// create User
export const useCreateUser = () => {
	const url = baseURL + '/user';
	return useMutation({
		mutationFn: (userInfo) => fetchPOST(url, userInfo),
	});
};

// delete User
export const useDeleteUser = () => {
	const url = baseURL + '/user/destroy';
	return useMutation({
		mutationFn: (pk) => fetchPOST(url, pk),
	});
};

// create Vacation
export const useCreateVacation = () => {
	const url = baseURL + '/vacation/create';
	return useMutation({
		mutationFn: (data) => fetchPOST(url, data),
	});
};

// update Vacation
export const useUpdateVacation = () => {
	const url = baseURL + '/vacation/update';
	return useMutation({
		mutationFn: (data) => fetchPOST(url, data),
	});
};

// delete Vacation
export const useDeleteVacation = () => {
	const url = baseURL + '/vacation/destroy';
	return useMutation({
		mutationFn: (pk) => fetchPOST(url, pk),
	});
};
