import { User } from "./users";
import { ObjectSchema } from "yup";

export type sortTypes = "ASC" | "DESC";
export type markType = "like" | "dislike";

interface Mark {
  id: string,
  type: markType,
  user: User,
}

export interface Comment {
  id: string,
  content: string,
  user: User,
}

export interface Snippet {
  id: string,
  language: string,
  code: string,
  user: User,
  marks?: Mark[],
  comments?: Comment[],
};

export interface SnippetData {
  data: Snippet[],
  meta: {
    itemsPerPage: number,
    totalItems: number,
    currentPage: number,
    totalPages: number,
    sortBy: [
      [
        string,
        sortTypes
      ]
    ],
    searchBy: string[],
    search: string,
    select: string[],
    filter: object,
  },
  links: {
    first: string,
    previous: string,
    current: string,
    next: string,
    last: string
  }
}

export interface PostData {
  language: string,
  code: string,
}

type Languages = { id: string; name: string };

export interface FormPostProps {
  schema: ObjectSchema<{
    language: string,
    code: string,
  }>,
  onSubmit: (data: PostData) => Promise<void>, 
  languages: Languages[], 
  loading: boolean, 
  error: string | null,
  type: string,
  id?: string,
}

