import { Typography } from "@mui/material";
import { useProfile } from "../api/getProfileInfo";
import { useStatistic } from "../api/getProfileStatistic";

const AccountStatistic: React.FC = () => {
  const id = useProfile().data?.id || 0;
  const statistic = useStatistic(+id).data;

  return (
    <div className="account-statistic">
      <Typography variant="subtitle2">Rating: {statistic && statistic.rating}</Typography>
      <Typography variant="subtitle2">Snippets: {statistic && statistic.snippetsCount}</Typography>
      <Typography variant="subtitle2">Comments: {statistic && statistic.commentsCount}</Typography>
      <Typography variant="subtitle2">Likes: {statistic && statistic.likesCount}</Typography>
      <Typography variant="subtitle2">Dislikes: {statistic && statistic.dislikesCount}</Typography>
      <Typography variant="subtitle2">Questions: {statistic && statistic.questionsCount}</Typography>
      <Typography variant="subtitle2">Correct Answers: {statistic && statistic.correctAnswersCount}</Typography>
      <Typography variant="subtitle2">Regular Answers: {statistic && statistic.regularAnswersCount}</Typography>
    </div>
  )
}

export default AccountStatistic;