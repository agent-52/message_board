

const {Router} = require("express")
const router = Router()

const {messages} = require("./newPageRouter")

router.get("/:id", (req, res) =>{
  const message = messages[req.params.id]
  console.log(req.params.id)
  if(message){
    res.render("message", {textMessage:message.text})
  }
  else{
    res.status(404).send("fuck off!")
  }
  
})

module.exports = router