import { SessionOptions } from "express-session";
// import { IS_DEV, SESSION_SECRET, SESSION_NAME, COOKIE_DOMAIN }  from "../configs";
import sessionStore from "../db/session";

export const SESSION_OPTIONS: SessionOptions = {
    secret: "my-secret",
    name: "se",
    store: sessionStore,
    proxy: true,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: "lax",
        // domain: COOKIE_DOMAIN,
    },
}
