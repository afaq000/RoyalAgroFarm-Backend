const express=require('express')
const cors=require('cors')
const connectDb = require('./config/db.js')
const userRouter = require('./routers/user.js')
const purchasePlaneRouter = require('./routers/purchasePlane.js')
const investmentPlaneRouter = require('./routers/investmentPlane.js')
const productRouter = require('./routers/product.js')
const orderRouter = require('./routers/order.js')
const dashobardRouter = require('./routers/dashboard.js')
const contactRouter = require('./routers/contact.js')
// const orderRouter = require('./routers/order.js')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDb()
app.use(userRouter)
app.use(purchasePlaneRouter)
app.use(investmentPlaneRouter)
app.use(productRouter)
app.use(orderRouter)
app.use(dashobardRouter)
app.use(contactRouter)


let port=9000
app.listen(port,()=>{

    console.log("server is start on ",port)
    
})