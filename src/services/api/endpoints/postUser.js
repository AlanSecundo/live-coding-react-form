import api from "../apiAdapter";

const postUser = async (user) => {
  return await api.post("/user", user);
};

export default postUser;
