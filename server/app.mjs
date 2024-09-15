import express from "express";
import cors from "cors";
import authRouter from "./controllers/authController.mjs";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/auth", authRouter);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
