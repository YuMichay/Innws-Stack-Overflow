import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Question } from "../../../shared/types/questions";
import { CustomIconButton } from '../../../shared';
import { AnswersList } from '../../../widgets';
import { AddAnswer } from '../../../features';
import { useAddAnswer } from '../../../features/add-answer/api/useAddAnswer';
import { useProfile } from '../../user/api/getProfileInfo';
import { useAuth } from '../../../shared/hooks/useAuth';

interface QuestionFieldProps {
  question: Question,
}

const QuestionField: React.FC<QuestionFieldProps> = ({ question }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const questionId = question.id;
  const isQuestionPage = location.pathname === `/questions/${questionId}`;
  const user = useProfile().data;
  const isMine = question.user.id === user?.id;
  const { isAuth } = useAuth();
  const [answerText, setAnswerText] = useState("");
  const addAnswerMutation = useAddAnswer(questionId, () => setAnswerText(""));

  const handleAddAnswer = async () => {
    if (!answerText.trim() || !questionId) return;
    addAnswerMutation.mutate(answerText);
  };

  const handleClick = () => {
    navigate(`/questions/${question.id}`);
  };

  const handleEditClick = () => {
    navigate("/questions/edit", { state: { questionId: question.id } });
  }

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
              <SyntaxHighlighter
                language={"plain-text"}
                style={atomOneDark}
                showLineNumbers={true}
                wrapLongLines={true}
                customStyle={{
                  borderRadius: "8px",
                  fontSize: "14px",
                  lineHeight: "1.2",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflow: "hidden"
                }}
              >{question.attachedCode}</SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className="controls">
          {!isQuestionPage && <CustomIconButton icon={<VisibilityIcon />} disabled={false} color="primary" onClick={handleClick} />}
          {isMine && <CustomIconButton disabled={!isAuth} icon={<EditIcon />} color="primary" onClick={handleEditClick} />}
        </div>
      </div>
      {isQuestionPage && <AddAnswer answerText={answerText} setAnswerText={setAnswerText} handleAddAnswer={handleAddAnswer} />}
      {isQuestionPage && question.answers && (
        <div className="answers">
          <Typography variant="h6">Answers</Typography>
          <AnswersList questionId={question.id} />
        </div>
      )}
    </>
  )
};

export default QuestionField;