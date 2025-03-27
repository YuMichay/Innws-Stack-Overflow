import { api } from "../../../shared/api/api";

export const authUser = async() => {
  try {
    const response = await api.get("/auth");

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