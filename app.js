const express = require('express')

const app = express()
const port = 5000

const routeItems = require('./router/itemsRoute')

app.use(express.urlencoded({extended:false}))

app.use('/api/v1/items',routeItems)



app.listen(port,()=>{
    console.log(`server listening on port: ${port}.......`)
})