import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, TextField } from '@mui/material';

interface AddAnswerProps {
  answerText: string,
  setAnswerText: (value: string) => void,
  handleAddAnswer: () => void;
}

const AddAnswer: React.FC<AddAnswerProps> = ({ answerText, setAnswerText, handleAddAnswer }) => {
  return (
    <div className="answer-input">
      <TextField
        label="Add Answer"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <IconButton aria-label="add" onClick={handleAddAnswer}>
        <AddCircleIcon />
      </IconButton>
    </div>
  )
}

export default AddAnswer;