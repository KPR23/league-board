import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./trpc";

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "http://localhost:8000/trpc",
		}),
	],
});
