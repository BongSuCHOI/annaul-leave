'use client';

import { useState } from 'react';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQueryWrapper = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient());
	const dehydratedState = dehydrate(queryClient);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={dehydratedState}>{children}</Hydrate>
		</QueryClientProvider>
	);
};

export default ReactQueryWrapper;
