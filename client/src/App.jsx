// Importing React Router Dom elements
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing app style sheet
import "./App.css";

// Importing Header component
import { Header } from "./components/Header";
// Importing Footer component
import Footer from "./components/Footer";

// Importing Tab Page components for our Routes components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Import Article Page components
import Facebook from "./pages/Facebook";
import Youtube from "./pages/Youtube";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
