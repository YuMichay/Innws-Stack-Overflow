import { useParams } from "react-router-dom";

import { useStatistic } from "../api/getProfileStatistic";
import { Typography } from "@mui/material";

const UserStatistic: React.FC = () => {
  const params = useParams().id;
  const userId = params ? params : 0;
  const userStatistic = useStatistic(+userId).data;
  
  return (
    <div className="account-statistic">
      <Typography variant="subtitle2">Rating: {userStatistic && userStatistic.rating}</Typography>
      <Typography variant="subtitle2">Snippets: {userStatistic && userStatistic.snippetsCount}</Typography>
      <Typography variant="subtitle2">Comments: {userStatistic && userStatistic.commentsCount}</Typography>
      <Typography variant="subtitle2">Likes: {userStatistic && userStatistic.likesCount}</Typography>
      <Typography variant="subtitle2">Dislikes: {userStatistic && userStatistic.dislikesCount}</Typography>
      <Typography variant="subtitle2">Questions: {userStatistic && userStatistic.questionsCount}</Typography>
      <Typography variant="subtitle2">Correct Answers: {userStatistic && userStatistic.correctAnswersCount}</Typography>
      <Typography variant="subtitle2">Regular Answers: {userStatistic && userStatistic.regularAnswersCount}</Typography>
    </div>
  )
};

export default UserStatistic;