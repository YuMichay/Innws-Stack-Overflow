import PersonIcon from '@mui/icons-material/Person';

import { Answer } from '../../../shared/types/questions';

interface AnswerField {
  answer: Answer;
}

const AnswerField: React.FC<AnswerField> = ({ answer }) => {
  return (
    <div key={answer.id} className="answer">
      <div className={`answer-header${answer.isCorrect ? " correct" : " incorrect"}`}>
        <PersonIcon />
        <p>{answer.user.username}</p>
      </div>
      <div className="answer-body">
        <p>{answer.content}</p>
      </div>
    </div>
  )
};

export default AnswerField;