import { useState } from "react";
import postUser from "../api/endpoints/postUser";

export const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createUser = async (user) => {
    setIsLoading(true);
    try {
      const response = await postUser({
        name: user.name,
        nationalRegistration: user.nationalRegistration,
      });

      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createUser,
    isLoading,
  };
};
