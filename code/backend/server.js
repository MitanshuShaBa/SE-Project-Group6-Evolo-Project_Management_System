const app = require(".");
const mongoose = require("mongoose");

//DB connections
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("DB CONNECTED!!");
});

// PORT
const port = process.env.PORT || 5000;

//Start server
app.listen(port, () => {
  console.log(`app is running on port ${port}...`);
});
