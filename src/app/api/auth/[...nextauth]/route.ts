import { authOptions } from "@/helpers/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// Simple debug logs to confirm the handler is reached
// Note: server logs will show these when the route is invoked
// const logAndHandle = async (req: Request) => {
// 	try {
// 		// eslint-disable-next-line no-console
// 		console.log("[auth route] /api/auth called ->", new URL(req.url).pathname);
// 	} catch (e) {
// 		// ignore
// 	}

// 	return handler(req as any);
// };

// export { logAndHandle as GET, logAndHandle as POST };
