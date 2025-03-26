import { Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { Logo } from '../../shared/index';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = false;
  // const { isAuth } = useAuth();
  const isQuestionPage = location.pathname === "/api/questions";

  return(
    <header>
      <Logo />
      <Stack direction="row" columnGap="20px">
        {isQuestionPage ?? (
          <Button variant="contained">Ask Question</Button>
        )}
        {isAuth ? (
            <Button variant="contained">Sign out</Button>
          ) : (
            <>
              <Button variant="contained" onClick={() => navigate("/register")}>Sign up</Button>
              <Button variant="contained" onClick={() => navigate("/login")}>Log in</Button>
            </>
          )
        }
      </Stack>
    </header>
  )
}

export default Header;