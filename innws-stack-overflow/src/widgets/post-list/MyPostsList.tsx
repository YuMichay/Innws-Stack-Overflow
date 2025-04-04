import { useNavigate } from "react-router-dom";
import { SnippetField } from "../../entities";
import { Snippet } from "../../shared/types/snippets";

interface MyPostsListProps {
  data: Snippet[];
};

const MyPostsList: React.FC<MyPostsListProps> = ({ data }) => {
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

export default MyPostsList;