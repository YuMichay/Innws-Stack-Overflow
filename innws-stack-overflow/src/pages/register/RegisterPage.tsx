import { Typography } from "@mui/material";
import { RegisterForm } from "../../features";

const RegisterPage: React.FC = () => {
  return(
    <div className="page__register">
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Registration
      </Typography>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage;