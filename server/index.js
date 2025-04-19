
require('dotenv').config({ path: '../.env' });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send(' Islamic Video Platform API is running');
});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
