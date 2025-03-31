import { Snippet, SnippetData } from '../types/snippets';
import { api } from './api';

export const getSnippets = async (page: number): Promise<SnippetData> => {
  const response = (await api.get(`/api/snippets?page=${page}`)).data;
  return response.data;
};

export const getSnippet = async (id: number): Promise<Snippet> => {
  const response = (await api.get(`/api/snippets/${id}`)).data;
  return response.data;
}