import { Routes, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import PokeBase from "../services/pokemon/PokeBase";
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<PokeBase />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Routers;
