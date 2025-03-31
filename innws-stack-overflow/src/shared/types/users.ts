type role = "admin" | "user";

export interface User {
  id: string,
  username: string,
  role: role,
}

export interface Statistic {
  snippetsCount: number,
  rating: number,
  commentsCount: number,
  likesCount: number,
  dislikesCount: number,
  questionsCount: number,
  correctAnswersCount: number,
  regularAnswersCount: number,
}

export interface UserStatistic {
  id: string,
  username: string,
  role: role,
  statistic: Statistic,
}