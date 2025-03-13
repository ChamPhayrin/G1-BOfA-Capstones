import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const { auth, persist } = useAuth();

	useEffect(() => {
		let isMounted = true; // Prevent state updates if the component unmounts

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (error) {
				console.error(error);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		if (!auth?.accessToken) {
			verifyRefreshToken();
		} else {
			setIsLoading(false);
		}

		return () => {
			isMounted = false;
		}; // Cleanup function to prevent memory leaks
	}, [auth, refresh]);

	useEffect(() => {
		console.log(`isLoading: ${isLoading}`);
		console.log(`accessToken: ${JSON.stringify(auth?.accessToken)}`);
	}, [isLoading, auth]);

	return (
		<>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
	);
};

export default PersistLogin;
