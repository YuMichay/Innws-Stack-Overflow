import { CommentField } from "../../entities";
import { Comment } from "../../shared/types/snippets";

interface CommentListProps {
  comments: Comment[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      {
        comments.map((comment) => (
          <CommentField
            key={comment.id}
            {...comment}
          />
        ))
      }
    </>

  )
}

export default CommentList;