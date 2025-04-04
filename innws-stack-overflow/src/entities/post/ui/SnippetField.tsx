import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { MarkButton } from '../../../features';
import { CustomIconButton } from '../../../shared';
import { useAuth } from '../../../shared/hooks/useAuth';
import { Snippet } from '../../../shared/types/snippets';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../user/api/getProfileInfo';

interface SnippetProps {
  snippet: Snippet;
  onClick?: () => void;
}

const SnippetField: React.FC<SnippetProps> = ({ snippet, onClick }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const user = useProfile().data;
  const isMine = snippet.user.id === user?.id;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.error("onClick function is not provided");
    }
  }

  const handleEditClick = () => {
    navigate("/snippet/edit", { state: { snippetId: snippet.id } });
  }
  
  return (
    <div key={snippet.id} className="snippet">
      <div className="snippet-header">
        <div className="snippet-header-title">
          <PersonIcon />
          <p>{snippet.user.username}</p>
        </div>
        <p>{snippet.language}</p>
      </div>
      <div className="snippet-code">
        <SyntaxHighlighter
          language={snippet.language || "javascript"}
          style={atomOneDark}
          showLineNumbers={true}
          wrapLongLines={true}
          customStyle={{
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "1.2",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflow: "hidden"
          }}
        >{snippet.code}</SyntaxHighlighter>
      </div>
      <div className="snippet-footer">
        <div className="snippet-footer-likes">
          <MarkButton disabled={!isAuth} snippetId={snippet.id} type="like" count={snippet.marks?.filter((mark) => mark.type === 'like').length || 0} icon={<ThumbUpIcon />} color="#FF3D77" />
          <MarkButton disabled={!isAuth} snippetId={snippet.id} type="dislike" count={snippet.marks?.filter((mark) => mark.type === 'dislike').length || 0} icon={<ThumbDownIcon />} color="#FF3D77" />
        </div>
        <div className="snippet-footer-icons">
          {isMine && <CustomIconButton disabled={!isAuth} icon={<EditIcon />} color="primary" onClick={handleEditClick} />}
          <CustomIconButton disabled={!isAuth} count={snippet.comments?.length || 0} icon={<CommentIcon />} color="primary" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default SnippetField;