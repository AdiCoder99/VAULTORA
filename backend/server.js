import express from "express"
import connectDB from "./configs/db.js"
import dotenv from "dotenv";
dotenv.config();
const app = express()

await connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', )


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})