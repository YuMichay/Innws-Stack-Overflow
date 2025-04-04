import { useParams } from "react-router-dom";

import { ErrorTypography, Spinner } from "../../shared";
import { QuestionField } from "../../entities";
import { useQuestion } from "../../entities/question/api/useQuestion";

const QuestionPage: React.FC = () => {
  const params = useParams();
  const questionId = params && params.id ? params.id : "0";
  const { data: question, isLoading: isQuestionLoading, isError: isQuestionError } = useQuestion(+questionId);

  return (
    <div className="page__question">
      {isQuestionError ? (
        <ErrorTypography text="Can't get the question" />
      ) : (
        <div className="question">
          {isQuestionLoading ? (
            <Spinner />
          ) : (
            <>
              {!question && (
                <ErrorTypography text="No question is found" />
              )}
              {question && (
                <QuestionField question={question} />
              )}
            </>
          )}
        </div>
      )}
    </div>
    
  )
}

export default QuestionPage;