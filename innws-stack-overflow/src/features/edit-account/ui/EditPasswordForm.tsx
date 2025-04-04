import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { schemaPassword } from "../schema/schema";
import { useAuth } from "../../../shared/hooks/useAuth";
import { ChangePasswordData } from "../types/types";
import { setNewPassword } from "../api/editPassword";

const EditPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPassword),
    defaultValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async(data: ChangePasswordData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await setNewPassword(data.oldPassword, data.password);
      
      if (response.data) {
        setIsAuth(false);
        navigate("/login");
      }
    } catch (err: unknown) {
      setError("Failed to change password");
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ maxWidth: 400, padding: 2 }}>
      <Typography variant="subtitle1" sx={{ padding: "10px 0", fontWeight: "bold" }}>Change your password:</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="oldPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Old password"
                  fullWidth
                  error={!!errors.oldPassword}
                  helperText={errors.oldPassword?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="New password"
                  type="password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm password"
                  type="password"
                  fullWidth
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
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
              {loading ? "Loading" : "Change Password"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default EditPasswordForm;