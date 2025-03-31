import { api } from "../../../shared/api/api"

export const setNewPassword = async (oldPassword: string, newPassword: string) => {
  try {
    const response = await api.patch('/api/me/password', {oldPassword, newPassword});
    return response.data;
  } catch(err) {
    console.log("Failed to change password", err);
  }
}