import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

import { getUser } from "../../../shared/api/user";
import { Comment, User } from "../../../shared/types/snippets";

const CommentField: React.FC<Comment> = ({ id, content }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(+id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

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