import { createTRPCRouter } from './trpc';
import { helloRouter } from './routers/hello';
import { authRouter } from './routers/auth';
import { promptsRouter } from './routers/prompts';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	hello: helloRouter,
	auth: authRouter,
	prompts: promptsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const createCaller = appRouter.createCaller;
