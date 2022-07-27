import express from "express"
import cors from "cors"
import morgan from "morgan";
import urls from "./api/url.route.js"

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/v1/urls", urls);
app.use("*", (req, res) => res.status(404).json({ error: 'Not Found'}));

export default app