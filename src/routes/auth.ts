import { Router } from "express";

export function authRouter(): Router {
    const router = Router();

    router.get("/api", (_req, res) => {
        res.json({ message: "Hello from server!" });
    });

    return router;
}
