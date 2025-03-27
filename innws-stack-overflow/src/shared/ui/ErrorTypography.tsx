import { Typography } from "@mui/material";

interface ErrorTypographyProps {
  text: string;
}

const ErrorTypography: React.FC<ErrorTypographyProps> = ({ text }) => {
  return (
    <Typography color="error" sx={{ textAlign: "center" }}>{text}</Typography>
  )
}

export default ErrorTypography;