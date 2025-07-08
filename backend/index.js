import express from 'express'
import { configDotenv } from 'dotenv'
import CORS from 'cors'
import connectDB from './utils/database.js'
import transaction from './routes/transactions.routes.js'
import users from './routes/users.routes.js'


configDotenv()

const app = express()


const PORT = process.env.PORT || 5000

app.use(CORS(
    {
        origin:"*"
    }
))
app.use(express.json())




app.use('/api',transaction)
app.use('/api',users)


async function initServer(){
    try {      
        await connectDB()
        app.listen(PORT,()=>{
         console.log(`Server started on port :${PORT} `);
        })
    } catch (error) {
        console.log(error)
    }
}

initServer()
