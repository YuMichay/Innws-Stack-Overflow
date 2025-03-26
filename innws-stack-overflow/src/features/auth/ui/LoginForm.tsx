import { Box, Button, CircularProgress, Grid, ListItem, ListItemText, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../types/types";
import { useState } from "react";

import { schemaLogin } from "../schema/schema";
import { loginUser } from "../api/loginAPI";
import { useAuth } from "../../../shared/utils/authUtils";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async(data: AuthData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser({username: data.username, password: data.password});
      
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsAuth(true);
        navigate("/");
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

          {error && (
            <Grid item xs={12}>
              <Box sx={{ color: "red", textAlign: "center" }}>
                {error}
              </Box>
            </Grid>
          )}

          <Grid container item xs={12} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Grid item>
              <ListItem component={Link} to={"/register"}>
                <ListItemText sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#D3D3D3",
                }}>Sign up</ListItemText>
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
              {loading ? <CircularProgress size={24} color="inherit" /> : "Log in"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default LoginForm;