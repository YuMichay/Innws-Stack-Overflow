import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <Stack direction="row" spacing={2} onClick={handleClick} style={{ cursor: "pointer" }}>
      <Box
        component="img"
        src="/assets/terminal-light.svg"
        alt="logo"
      />
      <Typography>Codelang</Typography>
    </Stack>
  )
};

export default Logo;