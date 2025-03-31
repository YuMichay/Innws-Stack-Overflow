import { QuestionField } from "../../entities";
import { Question } from "../../shared/types/questions";

interface QuestionsListProps {
  questions: Question[];
}

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  return (
    <div className="questions-list">
      {questions.map((question) => <QuestionField key={question.id} question={question} />)}
    </div>
  )
}

export default QuestionsList;