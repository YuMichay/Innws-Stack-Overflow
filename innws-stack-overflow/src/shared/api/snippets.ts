import { Snippet, SnippetData } from '../types/snippets';
import { api } from './api';

export const getSnippets = async (page: number): Promise<SnippetData> => {
  const { data } = (await api.get(`/api/snippets?page=${page}`)).data;
  return data;
};

export const getSnippet = async (id: number): Promise<Snippet> => {
  const { data } = (await api.get(`/api/snippets/${id}`)).data;
  return data;
}