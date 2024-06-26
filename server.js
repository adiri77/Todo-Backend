import express from "express";
import api from './routes/index.js';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

mongoose.connect(process.env.MONGODB_PATH, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.log('MongoDB connection error:', e));

const PORT = process.env.SERVER_PORT || 9000;
const origin = process.env.CORS_ORIGIN || 'https://to-do-frontend-omega.vercel.app/';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Add the extended option

app.use(api);

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
});
