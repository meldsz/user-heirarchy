import { useState } from "react";
import { encode } from "../../common/utils";
import { fetchUsers } from "../../common/api";
import { useUserContext } from "../../contexts/useUserContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { setLoggedInUser } = useUserContext();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const encodedSecret = encode(email, password);
      const result = await fetchUsers();
      const userId = result?.secrets[encodedSecret];

      if (userId) {
        const user = result?.users.find((user) => user?.id === userId);
        setLoggedInUser(user);
        navigate("/heirarchy");
      } else {
        setLoginError("User not Found");
      }
    } else {
      setLoginError("Enter valid user credentials");
    }
  };

  return (
    <>
      <div className="login-header">
        <h1>Please Login</h1>
      </div>
      <div className="login-box">
        <div className="input-container">
          <span>email address:</span>
          <input
            data-testid="email"
            className="login-input"
            aria-label="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <span>password:</span>
          <input
            data-testid="password"
            aria-label="password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="login-btn-container">
          <button
            data-testid="login-button"
            aria-label="Login"
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      {loginError && (
        <div data-testid="login-error" className="error-text">
          <span>{loginError}</span>
        </div>
      )}
    </>
  );
};
