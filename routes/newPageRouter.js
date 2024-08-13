const {Router} = require("express")
const router = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

router.get("/", (req, res) =>{
  res.render("form")
})
router.post("/", (req, res)=>{
  const author = req.body.author
  const messageText = req.body.messageText

  messages.push({text: messageText, user: author, added: new Date()})

  res.redirect("/")
  
})

module.exports = {router, messages}