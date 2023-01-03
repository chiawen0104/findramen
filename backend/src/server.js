import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000


mongoose.connect(
    process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

if(mongoose.connection.readyState == 2){
    console.log('DB online')
    routes(app)
    app.listen(port, () => {
        console.log(`Server is up on port ${port}.`)
    })
}
