import PersonIcon from '@mui/icons-material/Person';

import { Comment } from "../../../shared/types/snippets";

const CommentField: React.FC<Comment> = ({ content, user }) => {

  return (
    <div className="comment-field">
      {user && (
        <>
          <div className="comment-header">
            <PersonIcon />
            <p>{user.username}</p>
          </div>
          <div className="comment-body">
            <p>{content}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CommentField;