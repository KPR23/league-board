import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import "dotenv/config";
import { appRouter } from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
	res.send("Backend działa!");
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
