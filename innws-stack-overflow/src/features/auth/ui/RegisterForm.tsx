import { Box, Button, CircularProgress, Grid, ListItem, ListItemText, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { schemaRegister } from "../schema/schema";
import { AuthData } from "../types/types";
import { registerUser } from "../api/registerAPI";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = async(data: AuthData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await registerUser({username: data.username, password: data.password});
      
      if (response.data) {
        navigate("/login");
      }
    } catch (err: unknown) {
      setError("Registration failed");
      console.error("Registration error", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  fullWidth
                  error={!!errors.username}
                  helperText={errors.username?.message}
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
                  label="Password"
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
                  label="Confirm Password"
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

          <Grid container item xs={12} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Grid item>
              <ListItem component={Link} to={"/login"}>
                <ListItemText sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#D3D3D3",
                }}>Log in</ListItemText>
              </ListItem>
            </Grid>
            <Grid item>
              <ListItem component={Link} to={"/"}>
                <ListItemText sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#D3D3D3",
                }}>Home</ListItemText>
              </ListItem>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RegisterForm;