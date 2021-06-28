import { Router } from "express";
// import { handleAuthLogin, handleAuthCallback, handleAuthLogout } from "../auth";

export function authRouter(): Router {
    const router = Router();

    router.get('/', (req, res) => {
        res.send('Hello World!')
    })

    // router.get("/auth/login", handleAuthLogin);

    // router.get("/auth/callback", handleAuthCallback);

    // router.get("/auth/logout", handleAuthLogout);

    return router;
}
