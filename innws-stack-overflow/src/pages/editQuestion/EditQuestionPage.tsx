import { Typography } from "@mui/material";

import { EditQuestion } from "../../features";

const EditQuestionPage: React.FC = () => {
  return (
    <div className="page__edit-question">
      <Typography variant="h6">Change your Question!</Typography>
      <EditQuestion />
    </div>
  )
}

export default EditQuestionPage;