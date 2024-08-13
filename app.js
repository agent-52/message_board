const express = require("express")
const app = express()
const path = require("node:path")

const indexRouter = require("./routes/indexRouter")
const newPageRouter = require("./routes/newPageRouter")
const messageRouter = require("./routes/messageRouter")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")


app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)
app.use("/new", newPageRouter.router)
app.use("/message", messageRouter)



// app.get("/", (req,res) =>{
//   res.send("hi")
// })
// app.get("/new", (req,res) =>{
//   res.send("hi from new")
// })

const PORT = 8000;
 app.listen(PORT, () => {
  console.log("up and running")
 })

app.use