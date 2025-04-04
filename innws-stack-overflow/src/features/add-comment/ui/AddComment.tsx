import AddCommentIcon from '@mui/icons-material/AddComment';
import { IconButton, TextField } from '@mui/material';

interface AddCommentProps {
  commentText: string,
  setCommentText: (value: string) => void,
  handleAddComment: () => void;
}

const AddComment: React.FC<AddCommentProps> = ({ commentText, setCommentText, handleAddComment }) => {
  return (
    <div className="comment-input">
      <TextField
        label="Add Comment"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <IconButton aria-label="add" onClick={handleAddComment}>
        <AddCommentIcon />
      </IconButton>
    </div>
  )
}

export default AddComment;