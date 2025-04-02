import { Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { Logo } from '../../shared/index';
import { useAuth } from "../../shared/hooks/useAuth";
import { logoutUserUtils } from "../../shared/utils/logoutUserUtils";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, setIsAuth } = useAuth();
  const isQuestionPage = location.pathname === "/questions";

  return(
    <header>
      <Logo />
      <Stack direction="row" columnGap="20px">
        {isQuestionPage && (
          <Button variant="contained" onClick={() => navigate("/questions/create")}>Ask Question</Button>
        )}
        {isAuth ? (
            <Button variant="contained" onClick={() => logoutUserUtils(setIsAuth)}>Log out</Button>
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