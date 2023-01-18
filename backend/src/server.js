import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
import path from "path";
require('dotenv').config()

const app = express()
// routes(app)

if (process.env.NODE_ENV !== "production") {
    app.use(cors());
    app.use(express.json())
}

// define routes
app.get("/api", (req, res) => {
    // send the request back to the client
    console.log("GET /api");
    res.send({ message: "Hello from the server!" }).status(200);
});

if (process.env.NODE_ENV === "production") {
    console.log("production mode");
    routes(app)
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend", "build")));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    });
}
else {
    console.log("development mode")
    routes(app)
}


mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

const port = process.env.PORT || 4000
if(mongoose.connection.readyState == 2){
    console.log('DB online')
    // routes(app)
    app.listen(port, () => {
        console.log(`Server is up on port ${port}.`)
    })
}
