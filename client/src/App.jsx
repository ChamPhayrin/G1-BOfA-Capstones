// Importing React Router Dom elements
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing RequireAuth component
import RequireAuth from "./components/RequireAuth";

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
import Unauthorized from "./pages/Unauthorized";
import Moderator from "./pages/Moderator";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import PersistLogin from "./components/PersistLogin";

//Production env
const isProduction = process.env.NODE_ENV === "production";

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
					{/* public pathing */}
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/gmail" element={<Gmail />} />
          <Route path="/zoom" element={<Zoom />} />
          <Route path="/google" element={<Google />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/googlemaps" element={<GoogleMaps />} />
	</Routes>

				{/* Protected routes - Only in production */}
				{isProduction ? (
					<Routes>
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
					</Routes>
				) : (
					<Routes>
						<Route element={<PersistLogin />}>
							{/* Direct access in development */}
							<Route path="/admin" element={<Admin />} />
							<Route path="/moderator" element={<Moderator />} />
							<Route path="/account" element={<Account />} />
						</Route>
					</Routes>
				)}

				{/* 404 path */}
				<Routes>
					<Route path="*" element={<NotFound />} />
				</Routes>
		</Router>

			<Footer />
		</>
	);
}

export default App;
