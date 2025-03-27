import { useParams } from "react-router-dom";

import { CommentField, SnippetField } from "../../entities";
import { getSnippet } from "../../shared/api/snippets";
import { useEffect, useState } from "react";
import { Snippet } from "../../shared/types/snippets";
import { ErrorTypography, Spinner } from "../../shared";

const PostPage: React.FC = () => {
  const { id } = useParams();
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSnippet = async () => {
      if (!id) return;

      try {
        const data = await getSnippet(+id);
        setSnippet(data);
      } catch (err) {
        setError("Failed to fetch snippet");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, []);

  return (
    <div className="page__post">
      {loading && <Spinner />}
      {error && <ErrorTypography text={error} />}
      {snippet && 
        <div className="page__post-list">
          <SnippetField
            key={snippet.id}
            snippet={snippet}
          />
          {snippet.comments && (
            snippet.comments.map((comment) => (
              <CommentField
                key={comment.id}
                {...comment}
              />
            ))
          )}
        </div>
      }
    </div>
  )
}

export default PostPage;