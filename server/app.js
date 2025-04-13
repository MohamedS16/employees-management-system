const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const cors = require('cors');
const setupSwagger = require('./swagger');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

dotenv.config();

setupSwagger(app);

app.use(express.json());
app.use(cookieParser());

app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);
app.use('/auth', authRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
