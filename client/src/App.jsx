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
import Admin from "./pages/Admin";
import Account from "./pages/Account";

// Import Article Page components
import Facebook from "./pages/Facebook";
import Youtube from "./pages/Youtube";
import Gmail from "./pages/Gmail";
import Zoom from "./pages/Zoom";
import Google from "./pages/Google";
import Amazon from "./pages/Amazon";
import GoogleMaps from "./pages/GoogleMaps";

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
          <Route path="/admin" element={<Admin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/gmail" element={<Gmail />} />
          <Route path="/zoom" element={<Zoom />} />
          <Route path="/google" element={<Google />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/googlemaps" element={<GoogleMaps />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
