import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { schemaUsername } from "../schema/schema";
import { UsernameData } from "../types/types";
import { setNewUsername } from "../api/editUsername";

const EditUserNameForm: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUsername),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async(username: UsernameData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await setNewUsername(username.username);
      
      if (response.data) {
        localStorage.setItem("username", JSON.stringify(response.data.username));
        setIsAuth(false);
        navigate("/login");
      }
    } catch (err: unknown) {
      setError("Editing is failed");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ maxWidth: 400, padding: 2 }}>
      <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Change your username:</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="New username"
                  fullWidth
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />
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
              {loading ? "Loading" : "Save"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default EditUserNameForm;