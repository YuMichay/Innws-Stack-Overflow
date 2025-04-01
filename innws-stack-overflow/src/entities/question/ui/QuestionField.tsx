import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Question } from "../../../shared/types/questions";
import { CustomIconButton } from '../../../shared';
import { AnswersList } from '../../../widgets';
import { AddAnswer } from '../../../features';
import { useAddAnswer } from '../../../features/add-answer/api/useAddAnswer';

interface QuestionFieldProps {
  question: Question,
}

const QuestionField: React.FC<QuestionFieldProps> = ({ question }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const questionId = question.id;
  const isQuestionPage = location.pathname === `/questions/${questionId}`;
  const [answerText, setAnswerText] = useState("");
  const addAnswerMutation = useAddAnswer(questionId, () => setAnswerText(""));

  const handleAddAnswer = async () => {
    if (!answerText.trim() || !questionId) return;
    addAnswerMutation.mutate(answerText);
  };

  const handleClick = () => {
    navigate(`/questions/${question.id}`);
  };

  return (
    <>
      <div key={question.id} className={"question-field"}>
        <div className="question-field-icon">
          <HelpIcon color={`${question.isResolved ? "primary" : "warning"}`} />
          <div className="question-field-info">
            <Typography variant="h6">{question.title}</Typography>
            <Typography variant="caption">asked by user: {question.user.username}</Typography>
          </div>
        </div>
        <div className="question-field-description">
          <Typography variant="subtitle1">{question.description}</Typography>
          {isQuestionPage && (
            <div className="question-field-code">
              <Typography variant="subtitle2">{question.attachedCode}</Typography>
            </div>
          )}
        </div>
        {!isQuestionPage && <CustomIconButton icon={<VisibilityIcon />} disabled={false} color="primary" onClick={handleClick} />}
      </div>
      {isQuestionPage && <AddAnswer answerText={answerText} setAnswerText={setAnswerText} handleAddAnswer={handleAddAnswer} />}
      {isQuestionPage && !!question.answers.length && (
        <div className="answers">
          <Typography variant="h6">Answers</Typography>
          <AnswersList answers={question.answers} />
        </div>
      )}
    </>
  )
};

export default QuestionField;