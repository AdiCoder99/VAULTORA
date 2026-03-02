import express from "express"
import connectDB from "./configs/db.js"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.js"
import passwordRoutes from "./routes/pass.js"

dotenv.config();

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Connect to Database
await connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/user', userRoutes)
app.use('/api/password', passwordRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})