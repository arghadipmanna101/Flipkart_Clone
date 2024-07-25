const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// cors added
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', authRoutes);

app.get('/',()=>{
    '<h1>Server Started</h1>'
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
