import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { FormQuestion } from "../../../shared";
import { QuestionData } from "../../../shared/types/questions";
import { schema } from "../../create-question/schema/schema";
import { editQuestion } from "../api/editQuestion";

const EditQuestion: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id: string = location.state.questionId;

  const onSubmit = async(data: QuestionData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await editQuestion({ id: +id, title: data.title, description: data.description, attachedCode: data.attachedCode });
      if (response) {
        navigate(`/questions/${id}`);
      }
    } catch (err: unknown) {
      setError("Failed to save updated question");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ padding: 2 }}>
      <FormQuestion type={"edit"} schema={schema} onSubmit={onSubmit} loading={loading} error={error} id={id} />
    </Box>
  );
}

export default EditQuestion;