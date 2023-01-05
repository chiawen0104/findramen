import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
import path from "path";
require('dotenv').config()


const app = express()

if (process.env.NODE_ENV === "production") {
    console.log("production mode");
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend", "build")));
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    });
}
else {
    console.log("development mode")
}

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
