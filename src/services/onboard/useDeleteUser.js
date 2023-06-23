import { useState } from "react";
import deleteUser from "../api/endpoints/deleteUser";

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteUserById = async (id) => {
    setIsLoading(true);
    try {
      deleteUser(id);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    deleteUserById,
  };
};
