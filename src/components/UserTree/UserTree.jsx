import { useEffect, useState } from "react";
import { fetchUsers } from "../../common/api";
import { UserNode } from "../UserNode/UserNode";

export const UserTree = () => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await fetchUsers();
      const userTree = buildUserTree(allUsers?.users);
      setTree(userTree);
    };
    getAllUsers();
  }, []);

  const buildUserTree = (allUsers) => {
    const tree = {};
    const root = [];
    allUsers.forEach((user) => (tree[user.id] = { ...user, children: [] }));
    allUsers.forEach((user) => {
      if (user?.managerId) {
        tree[user?.managerId].children.push(tree[user?.id]);
      } else {
        root.push(tree[user?.id]);
      }
    });

    return root;
  };

  return (
    <div className="tree-container">
      {tree && tree.map((user) => <UserNode key={user.id} user={user} />)}
    </div>
  );
};
