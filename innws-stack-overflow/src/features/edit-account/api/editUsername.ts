import { api } from "../../../shared/api/api"

export const setNewUsername = async (username: string) => {
  try {
    const response = await api.patch('/api/me', {username});
    return response.data;
  } catch(err) {
    console.error("Failed to change username", err);
  }
}