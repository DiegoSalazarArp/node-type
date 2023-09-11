import express from 'express'
import { weatherRouter } from './routes/weather'

const app = express()
app.use(express.json()) // for parsing application/json

app.get('/', (_req, res) => {
  console.log('hjasfdf s d')
  res.send('Hello Worasdld!')
})

app.use('/weather', weatherRouter)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
