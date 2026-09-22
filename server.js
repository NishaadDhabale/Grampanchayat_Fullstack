const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || ['http://localhost:5173', 'http://localhost:8081'],
  credentials: false,
}));
app.use(express.json());

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change-me-now';
const ADMIN_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10);
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const upload = multer({ dest: UPLOAD_DIR });

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && bcrypt.compareSync(password, ADMIN_HASH)) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth;
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

app.post('/api/upload', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filename: req.file.filename });
});

app.get('/api/images', (req, res) => {
  try {
    const files = fs.readdirSync(UPLOAD_DIR);
    res.json(files.map(f => `/uploads/${f}`));
  } catch {
    res.status(500).json({ error: 'Could not list images' });
  }
});

app.use('/uploads', express.static(UPLOAD_DIR));

const PORT = parseInt(process.env.PORT || '4000', 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));