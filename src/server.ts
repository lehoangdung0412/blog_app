import express from "express";
import { authRouter } from "./routes/auth";

const app = express();

app.get("/health", (_req, res) => {
    res.status(200).send("OK");
});

/**
 * Set up the auth/*
*/
app.use(authRouter());

export default app;