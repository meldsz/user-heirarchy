const API_URL = "https://gongfetest.firebaseio.com/.json";

export const fetchUsers = async () => {
  try {
    return await (await fetch(API_URL)).json();
  } catch (err) {
    throw new Error("Error fetching Users", err);
  }
};
