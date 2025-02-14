const express = require("express");
const app = express();

const database = require("./config/database")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const fileUpload = require("express-fileupload")
const dotenv = require("dotenv")
dotenv.config()
// require('dotenv').config();

const PORT = process.env.PORT || 4000

// databse connect 
database.connect()

// middleware
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    maxAge: 14400,
}))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}))


// routes
// app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running"
    })
})
app.listen(PORT, () => {
    console.log(`App is runnig at ${PORT}`)
})