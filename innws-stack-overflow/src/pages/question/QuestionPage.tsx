import { useParams } from "react-router-dom";

import { ErrorTypography, Spinner } from "../../shared";
import { QuestionField } from "../../entities";
import { useQuestion } from "../../entities/question/api/useQuestion";

const QuestionsPage: React.FC = () => {
  const params = useParams();
  const questionId = params && params.id ? params.id : 0;
  const { data, isLoading, isError } = useQuestion(+questionId);

  return (
    <div className="page__question">
      {isError ? (
        <ErrorTypography text="Can't get the question" />
      ) : (
        <div className="question">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {!!data.length && (
                <ErrorTypography text="No question is found" />
              )}
              {data && (
                <QuestionField question={data} />
              )}
            </>
          )}
        </div>
      )}
    </div>
    
  )
}

export default QuestionsPage;