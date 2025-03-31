import { logoutUser } from "../../features/auth/api/logoutAPI";

export const logoutUserUtils = async (setIsAuth: (value: boolean) => void) => {
  await logoutUser();

  localStorage.removeItem("id");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  
  setIsAuth(false);
}