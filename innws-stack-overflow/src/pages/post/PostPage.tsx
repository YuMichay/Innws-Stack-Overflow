import { useParams } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";

import { SnippetField } from "../../entities";
import { AddComment } from "../../features";
import { ErrorTypography, Spinner } from "../../shared";
import { useAddComment } from "../../features/add-comment/api/useAddComment";
import { useSnippet } from "../../entities/post/api/useSnippet";
import { useComments } from "../../entities/comment/api/useComment";
import { CommentsList } from "../../widgets";


const PostPage: React.FC = () => {
  const { id } = useParams();
  const user = localStorage.getItem("username");
  const [commentText, setCommentText] = useState("");

  const { data: snippet, isLoading: snippetLoading, error: snippetError } = useSnippet(id);
  const { data: comments, isLoading: commentsLoading, error: commentsError } = useComments(id);
  const addCommentMutation = useAddComment(id, () => setCommentText(""));

  const handleAddComment = async () => {
    if (!commentText.trim() || !id || !user) return;
    addCommentMutation.mutate(commentText);
  };

  return (
    <div className="page__post">
      {snippet && 
        <div className="page__post-list">
          {snippetLoading ? <Spinner /> : snippetError ? <ErrorTypography text="Cannot find snippet" /> : <SnippetField key={snippet.id} snippet={snippet} />}
          <AddComment commentText={commentText} setCommentText={setCommentText} handleAddComment={handleAddComment} />
          {commentsLoading ? <Spinner /> : commentsError ? <ErrorTypography text="Cannot find comments" /> : comments ? <CommentsList comments={comments} /> : <Typography variant="subtitle1">No comments yet</Typography>}
        </div>
      }
    </div>
  )
}

export default PostPage;