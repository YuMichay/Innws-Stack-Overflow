import { useNavigate } from "react-router-dom";

import { SnippetField } from "../../entities";
import { Snippet } from "../../shared/types/snippets";

interface PostListProps {
  data: Snippet[];
};

const PostList: React.FC<PostListProps> = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;
  
  return (
    <div className="snippets">
      {data?.map((snippet) => (
        <div key={snippet.id}>
          <SnippetField
            key={snippet.id}
            snippet={snippet}
            onClick={() => navigate(`/snippets/${snippet.id}`, { state: { id: snippet.id } })}
          />
        </div>
      ))}
    </div>
  )
}

export default PostList;