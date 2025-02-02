import { app } from "./app.js";

app.on("error", (error) => {
  console.log("ERR: ", error);
  throw error;
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running at port : ${process.env.PORT}`);
});
