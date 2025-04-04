import { Typography } from "@mui/material";
import { LoginForm } from "../../features";

const LoginPage: React.FC = () => {
  return(
    <div className="page__login">
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Log in
      </Typography>
      <LoginForm />
    </div>
  )
}

export default LoginPage;