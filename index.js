const express = require("express");
const routes = require("./api/routes");
const PORT = process.env.PORT || 4000;

const app = express();

routes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
