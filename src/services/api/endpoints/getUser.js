import api from "../apiAdapter";

const getUsers = async () => {
  return await api.get("/user");
};

export default getUsers;
