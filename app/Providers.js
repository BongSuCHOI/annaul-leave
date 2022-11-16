'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

const GlobalWrapper = ({ children, session }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnMount: false,
						refetchOnReconnect: false,
						refetchOnWindowFocus: false,
					},
				},
			})
	);

	return (
		<SessionProvider refetchOnWindowFocus={false} session={session}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</SessionProvider>
	);
};

export default GlobalWrapper;

/**
 * 참고 url : https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1296853371
 */
