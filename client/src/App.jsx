import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";
import Moderator from "./pages/Moderator";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Articles from "./pages/Articles";

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
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/gmail" element={<Gmail />} />
        <Route path="/zoom" element={<Zoom />} />
        <Route path="/google" element={<Google />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/google-maps" element={<GoogleMaps />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[3450]} />}>
            <Route path="/moderator" element={<Moderator />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;