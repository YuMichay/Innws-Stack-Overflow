import HelpIcon from '@mui/icons-material/Help';

import { Question } from "../../../shared/types/questions";
import { Typography } from '@mui/material';

interface QuestionFieldProps {
  question: Question,
}

const QuestionField: React.FC<QuestionFieldProps> = ({ question }) => {
  return (
    <div key={question.id} className="question-field">
      <div className="question-field-icon">
        <HelpIcon />
        <div className="question-field-info">
          <Typography variant="h6">{question.title}</Typography>
          <Typography variant="caption">asked by user: {question.user.username}</Typography>
        </div>
      </div>
      <div className="question-field-description">
        <Typography variant="subtitle2">{question.description}</Typography>
      </div>
    </div>
  )
};

export default QuestionField;