import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('<h1>sdsd</h1>')
})

app.listen(PORT, () => console.log(`app running on port ${PORT}`))
