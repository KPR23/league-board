import { initTRPC } from "@trpc/server";
import { prisma } from "./prisma.js";

const t = initTRPC.create();

export const appRouter = t.router({
	hello: t.procedure.query(() => "hello world"),

	getMessages: t.procedure.query(async () => {
		return prisma.message.findMany();
	}),

	saveMessage: t.procedure
		.input((val) => {
			if (typeof val !== "string") throw new Error("Expected string");
			return val;
		})
		.mutation(async ({ input }) => {
			return prisma.message.create({
				data: { text: input },
			});
		}),
});

export type AppRouter = typeof appRouter;
