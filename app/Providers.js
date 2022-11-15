'use client';

import { useState } from 'react';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

const GlobalWrapper = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient());
	const dehydratedState = dehydrate(queryClient);

	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={dehydratedState}>{children}</Hydrate>
			</QueryClientProvider>
		</SessionProvider>
	);
};

export default GlobalWrapper;
