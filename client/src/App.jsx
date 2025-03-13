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

// Importing Page components for our Routes components
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

					{/* Protected routes - Only in production */}
					{isProduction ? (
						<>
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
						</>
					) : (
						<>
							<Route element={<PersistLogin />}>
								{/* Direct access in development */}
								<Route path="/admin" element={<Admin />} />
								<Route path="/moderator" element={<Moderator />} />
								<Route path="/account" element={<Account />} />
							</Route>
						</>
					)}

					{/* 404 path */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>

			<Footer />
		</>
	);
}

export default App;
