import { Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { Logo } from '../../shared/index';
import { useAuth } from "../../shared/utils/authUtils";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, setIsAuth } = useAuth();
  const isQuestionPage = location.pathname === "/api/questions";

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuth(false);
    navigate("/");
  }

  return(
    <header>
      <Logo />
      <Stack direction="row" columnGap="20px">
        {isQuestionPage ?? (
          <Button variant="contained">Ask Question</Button>
        )}
        {isAuth ? (
            <Button variant="contained" onClick={() => handleLogout()}>Log out</Button>
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