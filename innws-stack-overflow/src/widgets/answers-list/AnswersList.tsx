import { useAnswers } from "../../entities/answer/api/useAnswers";
import AnswerField from "../../entities/answer/ui/AnswerField";
import { ErrorTypography, Spinner } from "../../shared";

interface AnswersListProps {
  questionId: string,
}

const AnswersList: React.FC<AnswersListProps> = ({ questionId }) => {
  const { data, isLoading, isError } = useAnswers(questionId);

  return (
    <div className="answers-list">
      { isLoading && <Spinner /> }
      { isError && <ErrorTypography text="No answers" /> }
      { data && (
        <>
          {data.map((answer) => <AnswerField key={answer.id} answer={answer} />)}
        </>
      )}
    </div>
  )
};

export default AnswersList;