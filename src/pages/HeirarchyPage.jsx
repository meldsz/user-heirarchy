import { useUserContext } from "../contexts/useUserContext";
import { useNavigate } from "react-router";
import { UserTree } from "../components/UserTree/UserTree";
import { useEffect } from "react";

export const Heirarchy = () => {
  const { loggedInUser, setLoggedInUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/", { replace: true });
    }
  }, [loggedInUser]);

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/", { replace: true });
  };

  return (
    loggedInUser && (
      <>
        <div>
          <h1>Heirarchy Tree</h1>
        </div>
        <div className="user-profile">
          <span>{loggedInUser?.firstName}</span>
          <span>{loggedInUser?.lastName}</span>

          <a aria-label="logout" onClick={handleLogout}>
            (logout)
          </a>
        </div>
        <UserTree />
      </>
    )
  );
};
