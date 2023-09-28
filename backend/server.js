const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { chats } = require("./data/sol");
const {connectDB} = require("./config/db.js")
const {notFound,errorHandler} = require("./middleware/errorMiddleware")

const app = express();
dotenv.config({ path: path.resolve(__dirname, "../.env") });

connectDB()

var cors = require('cors');
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json({urlEncoded:true}))

app.get("/", (req, res) => {
  res.send(HomePage);
});

const userRoutes = require("./routes/userRoutes")
app.use('/api',userRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id == req.params.id);
//   res.send(singleChat);
// });

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening at localhost:${port}`);
});
