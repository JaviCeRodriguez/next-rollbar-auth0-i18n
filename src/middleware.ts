import { stackMiddlewares } from "./middlewares/stackHandler";
import { withAuth0 } from "./middlewares/withAuth0";
import { withi18n } from "./middlewares/withi18n";

const middlewares = [withi18n, withAuth0];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - about (about page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
