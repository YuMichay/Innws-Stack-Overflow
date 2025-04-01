import AnswerField from "../../entities/answer/ui/AnswerField";
import { Answer } from "../../shared/types/questions"

interface AnswersListProps {
  answers: Answer[];
}

const AnswersList: React.FC<AnswersListProps> = ({ answers }) => {
  return (
    <div className="answers-list">
      {answers.map((answer) => <AnswerField key={answer.id} answer={answer} />)}
    </div>
  )
};

export default AnswersList;