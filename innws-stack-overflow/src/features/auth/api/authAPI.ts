import { api } from "../../../shared/api/api";

export const authUser = async() => {
  if (localStorage.getItem("username")) {
    try {
      const response = await api.get("/api/auth");
  
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return false;
    }
  }
}