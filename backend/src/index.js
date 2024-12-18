const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory storage for users (replace with database in production)
const users = new Map();

// Middleware
app.use(cors());
app.use(express.json());

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  
  if (users.has(email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.set(email, { email, password: hashedPassword });

  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'your-secret-key');
  res.json({ token });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'your-secret-key');
  res.json({ token });
});

// Mock YouTube analytics data
app.get('/api/analytics', authenticateToken, (req, res) => {
  // Mock data for the last 28 days
  const mockData = {
    views: 15000,
    newSubscribers: 300,
    ctr: 3.5,
    period: 'Last 28 days',
    lastUpdated: new Date().toISOString()
  };

  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
