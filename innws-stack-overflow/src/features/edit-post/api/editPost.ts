import { api } from "../../../shared/api/api";
import { EditPostProps, EditPostResponse } from "../types/types";

export const editPost = async ({id, language, code}: EditPostProps): Promise<EditPostResponse | undefined> => {
  try {
    const response = await api.patch(`/api/snippets/${id}`, {language, code});
    return response.data;
  } catch(err) {
    console.error("Failed to save snippet", err);
  }
};