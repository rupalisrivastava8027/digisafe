const express = require("express")
const cors = require("cors");

const app = express()
app.use(cors())


// Contstants
const PORT = 3002;

const CREDENTIALS = {
    google: {
        name: "Google",
        username: "someone@gmail.com",
        password: "1234"
    },

    microsft: {
        name: "Microsoft",
        username: "someone@outlook.com",
        password: "3893"
    },

    CollegeBoard: {
        name: "CollegeBoard",
        username: "someone@collegeboard.com",
        password: "3893"
    }
}


// main req, res functions

app.get("/api", (req, res) => {
    res.json({message: "This is from backend, YAY Server is working!"})
})

app.get("/api/credentials", (req, res) => {
    res.json(CREDENTIALS)
})


    
app.listen(PORT, () => console.log("Server running!"))