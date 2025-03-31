import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { getMonacoLanguages } from "../../../shared/utils/codeLanguagesUtils";
import { PostData } from "../../../shared/types/snippets";
import { editPost } from "../api/editPost";
import { FormPost } from "../../../shared";
import { schema } from "../../create-post/schema/schema";

const EditPost: React.FC<number> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<{ id: string; name: string }[]>([]);
  const id: string = location.state.snippetId;

  useEffect(() => {
    setLanguages(getMonacoLanguages());
  }, []);

  const onSubmit = async(data: PostData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await editPost({ id: +id, language: data.language, code: data.code });
      if (response) {
        navigate("/snippets/me");
      }
    } catch (err: unknown) {
      setError("Failed to save updated snippet");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ padding: 2 }}>
      <FormPost type={"edit"} schema={schema} onSubmit={onSubmit} languages={languages} loading={loading} error={error} id={id} />
    </Box>
  );
}

export default EditPost;