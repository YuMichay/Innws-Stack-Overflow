import { Typography } from "@mui/material";

interface GreetingTypographyProps {
  text: string;
}

const GreetingTypography: React.FC<GreetingTypographyProps> = ({ text }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center" }}>
      {text}
    </Typography>
  )
};

export default GreetingTypography;