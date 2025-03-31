import { Statistic, User } from "../types/users";
import { api } from "./api";

export const getProfile = async (): Promise<User | undefined> => {
  try {
    const response = (await api.get(`/api/me`)).data;
    return response.data;
  } catch(err) {
    console.error("Can't load data", err);
  }
};

export const getProfileStatistic = async (id: number): Promise<Statistic | undefined> => {
  try {
    const response = (await api.get(`/api/users/${id}/statistic`)).data.data;
    return response.statistic;
  } catch(err) {
    console.error("Can't load data", err);
  }
};

export const deleteProfile = async () => {
  try {
    const response = (await api.delete('/api/me')).data;
    return response;
  } catch(err) {
    console.log("Deleting is failed", err);
  }
}