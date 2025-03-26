import { SnippetData } from '../types/snippets';
import { api } from './api';

export const getSnippets = async (page: number): Promise<SnippetData> => {
  const { data } = (await api.get(`/snippets?page=${page}`)).data;
  return data;
};