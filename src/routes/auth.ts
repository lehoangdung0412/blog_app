import { Router } from "express";
import { Request, Response, NextFunction } from "express";

export function authRouter(): Router {
    const router = Router();

    router.get("/api", (req: Request, res: Response, next: NextFunction) => {
        res.json({ message: "Hello from server!" });
    });

    router.use((req: Request, res: Response, next: NextFunction) => {
        if (!req.session.views) {
            req.session.views = 0;
        }
        next();
    });

    router.get('/private', (req: Request, res: Response) => {
        const numberOfViews = ++req.session.views;
        res.send(`The /private page has been visited ${ numberOfViews } times.`);
    });

    return router;
}
