import express from 'express'
import cors from 'cors'
import authRouter from './routes/AuthRoutes.js'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use(express.json())

app.use('/api/auth',authRouter)

export default app