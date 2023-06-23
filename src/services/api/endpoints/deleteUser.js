import api from "../apiAdapter";

const deleteUser = async (id) => {
  return await api.delete(`/user/${id}`);
};

export default deleteUser;
