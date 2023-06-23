import { useState } from "react";
import getUsers from "../api/endpoints/getUser";

export const useListUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getUsers();

      setDataSource(response.data)
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loadUsers,
    isLoading,
    dataSource
  }
};
