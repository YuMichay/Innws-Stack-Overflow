import { Typography } from "@mui/material";
import { CreateQuestion } from "../../features";

const CreateQuestionPage: React.FC = () => {
  return (
    <div className="page__create-question">
      <Typography variant="h6">Create New Question!</Typography>
      <CreateQuestion />
    </div>
  )
}

export default CreateQuestionPage;