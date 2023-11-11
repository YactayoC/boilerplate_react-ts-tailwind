import { NameAPI } from "../api/NameAPI";
import { isAxiosError, AxiosError } from "axios";

import { userAtom } from "../store";
import { useAtom } from "jotai";

interface IAuthLogin {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [userAtomValue, setUserAtomValue] = useAtom(userAtom);

  const handleLogin = async ({ email, password }: IAuthLogin) => {
    try {
      const response = await NameAPI.post("/login", { email, password });

      if (!response.data.ok) {
        throw new Error("Error de inicio de sesión");
      }

      const data = await response.data;
      setUserAtomValue(data);

      return { response: data, ok: true };
    } catch (error) {
      return handleManagmentError((error as AxiosError) || (error as Error));
    }
  };

  const handleManagmentError = (error: AxiosError | Error) => {
    if (isAxiosError(error)) {
      return { response: error.response?.data, ok: false };
    }

    if (error instanceof Error) {
      return { response: error.message, ok: false };
    } else {
      return { response: "Error de inicio de sesión", ok: false };
    }
  };

  return {
    handleLogin,
    userAtomValue,
  };
};
