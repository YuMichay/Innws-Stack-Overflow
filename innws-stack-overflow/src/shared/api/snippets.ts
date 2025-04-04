import { Snippet, SnippetData } from '../types/snippets';
import { api } from './api';

export const getSnippets = async (page: number): Promise<SnippetData | undefined> => {
  try {
    const response = (await api.get(`/api/snippets?page=${page}`)).data;
    return response.data;
  } catch(err) {
    console.error("Failed to load snippets", err);
  }
};

export const getSnippet = async (id: number): Promise<Snippet | undefined> => {
  try {
    const response = (await api.get(`/api/snippets/${id}`)).data;
    return response.data;
  } catch(err) {
    console.error("Failed to load snippet", err);
  }
}