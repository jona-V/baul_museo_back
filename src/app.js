import express from 'express'
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from "cors";

import { FRONTEND_URL } from "./config.js";
import authRoutes from "./routes/auth.routes.js";
/*import favsRoutes from "./routes/favs.routes.js";*/

const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
/*app.use("/api", favsRoutes);*/

export default app;