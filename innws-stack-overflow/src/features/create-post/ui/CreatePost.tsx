import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Editor from "@monaco-editor/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";

import { schema } from "../schema/schema";
import { CreatePostData } from "../types/types";
import { getMonacoLanguages } from "../../../shared/utils/codeLanguagesUtils";
import { postSnippet } from "../api/postSnippet";

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    setLanguages(getMonacoLanguages());
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      language: "JavaScript",
      code: "",
    },
  });

  const onSubmit = async(data: CreatePostData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postSnippet({ language: data.language, code: data.code });
      if (response.data) {
        navigate("/");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Language of your snippet:</Typography>
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang.id} value={lang.name}>
                      {lang.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Grid>

          <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Code of your snippet:</Typography>
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <Editor
                  height="200px"
                  language={field.value}
                  theme="vs-dark"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.code && <Typography color="error">{errors.code.message}</Typography>}
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Box sx={{ color: "red", textAlign: "center" }}>
                {error}
              </Box>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {loading ? "Loading" : "Create Snippet"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default CreatePost;