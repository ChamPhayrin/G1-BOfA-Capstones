const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const { logger } = require('./middleware/logEvents.cjs');
const errorHandler = require("./middleware/errorHandler.cjs");
const corsOptions = require("./configs/corsOption.cjs");
const {verifyJWT} = require("./middleware/verifyJWT.cjs");
const cookieParser = require("cookie-parser");

dotenv.config({ path: path.resolve(__dirname, "../.env") }); // Path to the .env file
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);
app.use(cookieParser()); // Parse cookies before other middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors(corsOptions)); // Enable CORS with options


// Routes
app.use('/register', require('./routes/register.cjs')); // Use the register router
app.use('/auth', require('./routes/auth.cjs'));
app.use('/refresh', require('./routes/refresh.cjs'));
app.use('/logout', require('./routes/logout.cjs'));
app.use('/messages', require('./routes/api/messages.cjs'));
app.use(verifyJWT);
app.use('/users', require('./routes/api/users.cjs'));



// 404 handler
app.all("*", (req, res, next) => {
  res.status(404);
  next(new Error(`Page not found - ${req.originalUrl}`));
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});