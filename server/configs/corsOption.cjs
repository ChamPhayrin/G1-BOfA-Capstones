// configs/corsOption.cjs
const allowedOrigins = [
  "http://localhost:3000", // Replace with frontend origin
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials (cookies)
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
