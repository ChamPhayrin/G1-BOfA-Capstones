// configs/corsOption.cjs
const allowedOrigins = [
  "https://g1-bofa-capstones.onrender.com",
  "https://g1-b-of-a-capstones.vercel.app",
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
