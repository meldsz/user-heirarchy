import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> Oops! The page you're looking for doesn't exist.</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};
