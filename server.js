const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes')
const donorRoutes = require('./routes/donorRoutes');
const patientRoutes = require('./routes/patientRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));
app.use('/api/admin', adminRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/patient', patientRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));