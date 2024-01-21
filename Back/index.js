const express = require('express')
const db = require('./database/index.js')
const PORT = 3000
const app = express()
const cors = require('cors')


const userRoute=require('./Routes/userRoute.js');
const wishRoute= require('./Routes/wishRoute.js')
const categorieRoute=require('./Routes/categorieRoute.js')
const bidRoute=require('./Routes/bidRoute.js')
const offersRoute=require('./Routes/offersRoute.js')
const satisfactionRoute = require('./Routes/satisfationRoute.js')

const reservationRoute=require('./Routes/reservationsRoute.js')
const notificationRoute=require('./Routes/notificationRoute.js')
const reviewRoute=require('./Routes/reviewRoute.js')
const adminRoute = require('./Routes/adminRoute.js')
const inboxRoute = require('./Routes/inboxRoute.js')
const featureRoute = require('./Routes/FeaturesRoute.js')

const loginRoute = require('./Routes/loginRoute.js')
const signUpRoute = require('./Routes/signupRoute.js')

const offerhascatRoute = require('./Routes/offerhascatRoute.js')
const logAdminRouter = require('./Routes/logAdminRoute.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))


app.use('/api',userRoute)
app.use('/api',adminRoute)
app.use('/api',wishRoute)
app.use('/api',categorieRoute)
app.use('/api',bidRoute)
app.use('/api',offersRoute)
app.use('/api',satisfactionRoute)
app.use('/api',reservationRoute)
app.use('/api',notificationRoute)
app.use('/api',reviewRoute)
app.use('/api',inboxRoute)
app.use('/api',loginRoute)
app.use('/api',signUpRoute)
app.use('/api',offerhascatRoute)

app.use('/api',logAdminRouter)
app.use('/api',featureRoute)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})