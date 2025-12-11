"use client";
import { trpc } from "@/utils/trpc";

export default function Home() {
	const { data, isLoading, error } = trpc.getMessages.useQuery();
	if (error) {
		return <div>Error loading messages: {error.message}</div>;
	}
	return (
		<div>
			<h1>League Board</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{data?.map((message) => (
						<li key={message.id}>{message.text}</li>
					))}
				</ul>
			)}
		</div>
	);
}
