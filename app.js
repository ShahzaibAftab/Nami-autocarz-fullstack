const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const scholarShipRouter = require('./routes/api/scholarship');
const jobRouter = require('./routes/api/jobs');
const profileRouter = require('./routes/api/Profile');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/user');
const Profile = require('./models/profile');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

connectDB();

// default Route
app.get('/', (req, res) => {
  res.status(201).send('Server is Running');
});
// Your existing routes
app.use('/api/scholarship', scholarShipRouter);
app.use('/api/job', jobRouter);
app.use('/api/Profile', profileRouter);

// New route for user signup
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, confirmPassword, birthday } = req.body;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if the user already exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: 'Error duplicate user' });
    }

    // Create a new user
    user = new User({
      username,
      password,
      birthday,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Create a corresponding profile
    const profile = new Profile({
      user: user._id,
      academicHistory: '',
      employmentHistory: '',
      skills: '',
    });

    // Save the profile to the database
    await profile.save();

    res.status(200).json({ message: 'Signup successful', user: user._id });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Include your authentication routes
app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Listening on port 5000!');
});
