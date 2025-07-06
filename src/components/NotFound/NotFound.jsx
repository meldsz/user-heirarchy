import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div data-testid="not-found-container">
      <h1> Oops! The page you're looking for doesn't exist.</h1>
      <button data-testid="home-btn" onClick={handleClick}>
        Back to Home
      </button>
    </div>
  );
};
