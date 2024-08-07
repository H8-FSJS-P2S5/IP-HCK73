require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(router)


// app.post('/which-is-better', async (req, res) => {
//   let responseOpenAI = await openAI()
//   res.send(responseOpenAI)
// })

app.listen(port, () => {
  console.log(`Server accessible on http://localhost:${port}`)
})