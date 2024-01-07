const express = require('express')
const db = require('./database/index.js')
const PORT = 3000
const app = express()
const cors = require('cors')

const userRoute=require('./Routes/userRoute.js');
const wishRoute= require('./Routes/wishRoute.js')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))


app.use('/api',userRoute)
app.use('/api',wishRoute)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})