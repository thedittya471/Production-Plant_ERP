import connectDb from "./config/db.js";
import { app } from "./app.js";
import { env } from "./config/env.js";

connectDb()
  .then(() => {
    app.listen(env.PORT || 8000, () => {
      console.log(`Server is running at port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to DB", error);
    process.exit(1);
  });
