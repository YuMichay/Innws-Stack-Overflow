import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Editor from "@monaco-editor/react";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";

import { FormPostProps } from "../types/snippets";
import { useSnippet } from "../../entities/post/api/useSnippet";

const FormPost: React.FC<FormPostProps> = ({ id = '0', schema, onSubmit, languages, loading, error, type }) => {
  const defaultValuesObj = {
    language: "JavaScript",
    code: "",
  }

  const snippet = useSnippet(`${id}`).data;

  if (type === 'edit' && !!id) {
    if (snippet) {
      defaultValuesObj.language = snippet.language;
      defaultValuesObj.code = snippet.code;
    }
  }
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesObj
  });

  return (
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
            {loading ? "Loading" : type === "create" ? "Create Snippet" : "Save Snippet"}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default FormPost;