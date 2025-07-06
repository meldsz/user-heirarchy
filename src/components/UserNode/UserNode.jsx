import { useState } from "react";

export const UserNode = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const [isBadImage, setIsBadImage] = useState(false);
  const isManager = user?.children?.length > 0;
  const initials =
    user?.firstName && user?.lastName
      ? user?.firstName[0] + user?.lastName[0]
      : "N/A";

  return (
    <div data-testid="user-node-container">
      <div className="user-container">
        <button
          data-testid="toggle"
          className="toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {isManager ? "+" : <strong>-</strong>}
        </button>
        {user?.photo && !isBadImage ? (
          <img
            data-testid="user-badge"
            className="user-badge"
            src={user?.photo}
            onError={() => setIsBadImage(true)}
          />
        ) : (
          <div className="user-badge">{initials}</div>
        )}
        <div className="user-details">
          <div>
            {user?.firstName} {user?.lastName}
          </div>
          <div> {user?.email}</div>
        </div>
      </div>

      {isManager && expanded && (
        <div className="user-children">
          {user?.children.map((child) => (
            <UserNode key={child?.id} user={child} />
          ))}
        </div>
      )}
    </div>
  );
};
