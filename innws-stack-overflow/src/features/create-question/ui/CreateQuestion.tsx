import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { schema } from "../schema/schema";
import { postQuestion } from "../api/postQuestion";
import { QuestionData } from "../../../shared/types/questions";
import { FormQuestion } from "../../../shared";

const CreateQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async(data: QuestionData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postQuestion({ title: data.title, description: data.description, attachedCode: data.attachedCode });
      if (response.data) {
        navigate("/questions");
      }
    } catch (err: unknown) {
      setError("Failed to add new question");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ padding: 2 }}>
      <FormQuestion type={"create"} schema={schema} onSubmit={onSubmit} loading={loading} error={error} />
    </Box>
  );
}

export default CreateQuestion;