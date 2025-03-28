type sortTypes = "ASC" | "DESC";
type role = "admin" | "user";
export type markType = "like" | "dislike";

export interface User {
  id: string,
  username: string,
  role: role,
}

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