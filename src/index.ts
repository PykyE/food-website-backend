import "dotenv/config";

import mongoose from "mongoose";

import app from "./app";

const port: any = 8080 || process.env.PORT;

(async () => {
  await mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Succesfully connected to mongo database");
  });
})();

app.listen(port, () => {
  console.log(`\nListening on port ${port}`);
});
