import { useParams } from "react-router-dom";
import { useState } from "react";

import { SnippetField } from "../../entities";
import { ErrorTypography, Spinner } from "../../shared";
import CommentList from "../../widgets/comments-list/CommentsList";
import { useSnippet } from "../../shared/hooks/useSnippet";
import { addComment } from "../../features/add-comment/api/addComment";
import { AddComment } from "../../features";

const PostPage: React.FC = () => {
  const { id } = useParams();
  const { snippet, comments, loading, error } = useSnippet(id);
  const user = localStorage.getItem("username");
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async () => {
    if (!commentText.trim() || !id || !user) return;

    try {
      if (snippet) {
        await addComment({
          content: commentText,
          snippetId: +snippet.id,
        });
        setCommentText("");
      }
    } catch (err) {
      console.error("Add comment failed", err);
    }
  };

  if (loading) (<Spinner />);
  if (error) (<ErrorTypography text={error} />);

  return (
    <div className="page__post">
      {snippet && 
        <div className="page__post-list">
          <SnippetField
            key={snippet.id}
            snippet={snippet}
          />
          <AddComment commentText={commentText} setCommentText={setCommentText} handleAddComment={handleAddComment} />
          {comments && <CommentList comments={comments} />}
        </div>
      }
    </div>
  )
}

export default PostPage;