import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchGET, fetchPOST } from '@lib/basicFetch';

const baseURL = `${process.env.NEXTAUTH_URL}api`;

// DB get controller (user, all user...)
export const useDBGET = (slug, key, prefetch = undefined) => {
	const url = baseURL + slug;
	return useQuery({
		queryKey: key,
		queryFn: () => fetchGET(url),
		initialData: prefetch,
	});
};

// DB post controller (create, update, delete...)
export const useDBPOST = (slug, key) => {
	const queryClient = useQueryClient();
	const url = baseURL + slug;
	return useMutation({
		mutationFn: (data) => fetchPOST(url, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: key });
		},
		onError: (error) => {
			console.error(error);
		},
	});
};
