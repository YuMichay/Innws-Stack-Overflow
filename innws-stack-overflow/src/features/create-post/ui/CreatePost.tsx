import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { schema } from "../schema/schema";
import { getMonacoLanguages } from "../../../shared/utils/codeLanguagesUtils";
import { postSnippet } from "../api/postSnippet";
import FormPost from "../../../shared/ui/FormPost";
import { PostData } from "../../../shared/types/snippets";

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    setLanguages(getMonacoLanguages());
  }, []);

  const onSubmit = async(data: PostData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postSnippet({ language: data.language, code: data.code });
      if (response.data) {
        navigate("/snippets/me");
      }
    } catch (err: unknown) {
      setError("Failed to add new snippet");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ padding: 2 }}>
      <FormPost type={"create"} schema={schema} onSubmit={onSubmit} languages={languages} loading={loading} error={error} />
    </Box>
  );
}

export default CreatePost;