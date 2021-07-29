import "express-session";

/**
 * The interface declared for req.session seems to have changed from SessionData to Session from @types/express-session 1.17.0 → 1.17.1.
 * https://github.com/expressjs/session/issues/792
 */
declare module "express-session" {
    interface Session {
        views: number;
    }
}
