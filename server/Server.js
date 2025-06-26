const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Patient = require('./PatientsData');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

//  Admin Login API
app.post('/api/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'sixfox' && password === 'sixfox123') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});


//  Register Patient API

app.post('/api/register', async (req, res) => {
  try {
    const data = req.body;
    const newPatient = new Patient(data);
    await newPatient.save();
    res.json({ success: true, message: 'Patient registered successfully' });
  } catch (err) {
    console.error('Error saving patient:', err);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

// Get All Patients

app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch patients' });
  }
});

//  Delete Patient by ID

app.delete('/api/patients/:id', async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Delete failed' });
  }
});

//Start Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
