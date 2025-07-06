import { useState } from "react";
import { encode } from "../common/utils";
import { fetchUsers } from "../common/api";
import { useUserContext } from "../contexts/useUserContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { setLoggedInUser } = useUserContext();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const encodedSecret = encode(email, password);
    const result = await fetchUsers();
    const userId = result?.secrets[encodedSecret];
    const user = result?.users.find((user) => user?.id === userId);

    if (user) {
      setLoggedInUser(user);
      navigate("/heirarchy");
    } else {
      setLoginError("User not found");
    }
  };

  return (
    <>
      <h1>Please Login</h1>
      <div className="login-box">
        <div className="input-container">
          <span>email address:</span>
          <input
            className="login-input"
            aria-label="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <span>password:</span>
          <input
            aria-label="password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="login-btn-container">
          <button
            aria-label="Login"
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      {loginError && (
        <div className="error-text">
          <span>User Not found</span>
        </div>
      )}
    </>
  );
};
