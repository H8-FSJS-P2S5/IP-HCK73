const express = require('express')
const openAI = require('./helpers/openai')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.post('/which-is-better', async (req, res) => {
  let responseOpenAI = await openAI()
  res.send(responseOpenAI)
})

app.listen(port, () => {
  console.log(`Server accessible on http://localhost:${port}`)
})