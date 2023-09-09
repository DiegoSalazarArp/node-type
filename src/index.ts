import express from 'express'

const app = express()
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  console.log('hjasfdf sd')
  res.send('Hello Worasdld!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
