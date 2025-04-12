const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

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
