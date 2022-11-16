import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchGET, fetchPOST } from '@lib/basicFetch';

const baseURL = `${process.env.NEXTAUTH_URL}api`;

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
	const queryClient = useQueryClient();
	const url = baseURL + '/user';
	return useMutation({
		mutationFn: (userInfo) => fetchPOST(url, userInfo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allUser'] });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};

// delete User
export const useDeleteUser = () => {
	const queryClient = useQueryClient();
	const url = baseURL + '/user/destroy';
	return useMutation({
		mutationFn: (pk) => fetchPOST(url, pk),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allUser'] });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};

// create Vacation
export const useCreateVacation = () => {
	const queryClient = useQueryClient();
	const url = baseURL + '/vacation/create';
	return useMutation({
		mutationFn: (data) => fetchPOST(url, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};

// update Vacation
export const useUpdateVacation = () => {
	const queryClient = useQueryClient();
	const url = baseURL + '/vacation/update';
	return useMutation({
		mutationFn: (data) => fetchPOST(url, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};

// delete Vacation
export const useDeleteVacation = () => {
	const queryClient = useQueryClient();
	const url = baseURL + '/vacation/destroy';
	return useMutation({
		mutationFn: (pk) => fetchPOST(url, pk),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};
