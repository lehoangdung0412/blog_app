import express from "express";
import session from "express-session";
import { SESSION_OPTIONS } from "./session";
import { authRouter } from "./routes/auth";

const app = express();

// Health Check
app.get("/health", (_req, res) => {
    res.status(200).send("OK");
});

app.use(session(SESSION_OPTIONS));

// Set up the auth
app.use(authRouter());

export default app;