// Importing React Router Dom elements
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing app style sheet
import "./App.css";

// Importing Header component
import { Header } from "./components/Header";
// Importing Footer component
import Footer from "./components/Footer";

// Importing Page components for our Routes components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Properly supports the route /home */}
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
