import express from "express";
import router from "./routes/routes.js"; // Ensure .js extension is included
import cors from "cors"
const app = express();
const port = 8000;
app.use(cors())
app.use("/", router);

app.listen(port, () => {
    console.log("server running");
    console.log("check")
});
