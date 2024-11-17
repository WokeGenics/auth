import dotenv from "dotenv";
import dbconnect from "./dbconnection.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
dbconnect().then(() => {
  app.on("error", (error) => {
    console.error("Error :", error);
    throw error;
  });
  app.listen(8000 || process.env.PORT, () => {
    console.log(`Server started at port: ${process.env.PORT}`);
  });
});
