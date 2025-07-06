import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div data-testid="not-found-container" className="not-found-container">
      <h1> Oops!</h1>
      <h2>The page you're looking for doesn't exist.</h2>
      <button
        data-testid="home-btn"
        onClick={handleClick}
        className="login-btn"
      >
        Back to Home
      </button>
    </div>
  );
};
