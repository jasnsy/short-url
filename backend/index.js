import dotenv from "dotenv"
import app from "./server.js"
import connectDB from "./config/db.js"

dotenv.config({ path: './config/config.env' })
connectDB(process.env.LOCAL_MONGO)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});