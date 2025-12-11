import "./setup-env.js";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { prisma } from "./prisma.js";
import { type AppRouter, appRouter } from "./router.js";

console.log("process.env.DATABASE_URL:", process.env.DATABASE_URL);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (_req, res) => {
	const messagesCount = await prisma.message.count();
	res.send(
		messagesCount === 0
			? "No messages have been added yet."
			: "Some messages have been added to the database.",
	);
});

app.use(
	"/trpc",
	createExpressMiddleware({
		router: appRouter,
	}),
);

const port = 8000;

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

export type { AppRouter };
