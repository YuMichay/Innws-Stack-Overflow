import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Editor from "@monaco-editor/react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { useQuestion } from "../../entities/question/api/useQuestion";
import { FormQuestionProps } from "../types/questions";

const FormPost: React.FC<FormQuestionProps> = ({ id = '0', schema, onSubmit, loading, error, type }) => {
  const defaultValuesObj = {
    title: "",
    description: "",
    attachedCode: "",
  }

  const question = useQuestion(+id).data;

  if (type === 'edit' && !!id) {
    if (question) {
      defaultValuesObj.title = question.title;
      defaultValuesObj.description = question.description;
      defaultValuesObj.attachedCode = question.attachedCode;
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
          <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Title:</Typography>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Description of your question:</Typography>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                fullWidth
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          {errors.description && <Typography color="error">{errors.description.message}</Typography>}
        </Grid>

        <Grid item xs={12}>
        <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Code of your question:</Typography>
          <Controller
            name="attachedCode"
            control={control}
            render={({ field }) => (
              <Editor
                height="200px"
                language={'plain-text'}
                theme="vs-dark"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.attachedCode && <Typography color="error">{errors.attachedCode.message}</Typography>}
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
            {loading ? "Loading" : type === "create" ? "Create Question" : "Save Question"}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default FormPost;