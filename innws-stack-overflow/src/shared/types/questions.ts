import { sortTypes } from "./snippets"
import { User } from "./users"

interface Answer {
  id: string,
  content: string,
  isCorrect: boolean,
}

export interface Question {
  id: string,
  title: string,
  description: string,
  attachedCode: string,
  answers: Answer[],
  user: User,
  isResolved: boolean,
}

export interface QuestionsData {
  data: Question[],
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