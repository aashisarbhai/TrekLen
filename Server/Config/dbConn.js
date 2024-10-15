const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/TrekLen'
mongoose.connect(url)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB...', err))