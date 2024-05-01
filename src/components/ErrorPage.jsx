import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();
    // The component returns a div with a message and a button
	return (
		<div className="error-page">
			<h1>404 Page Not Found!</h1>
			<button onClick={() => navigate("/")}>Go Back to Home</button>
		</div>
	);
};

export default ErrorPage;
