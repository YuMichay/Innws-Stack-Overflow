import { Box, List } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';

import { AccountInfoMini } from '../../entities/index';
import { CustomListItem } from '../../shared/index';

const SideBar: React.FC = () => {
  const isAuth = false;
  // const { isAuth } = useAuth();

  return(
    <div className="sidebar">
      {isAuth ?? (
        <AccountInfoMini />
      )}
      <Box>
        <List>
          <CustomListItem linkPath={"/"} icon={<HomeIcon />} text="Home" />
          {isAuth ?? <CustomListItem linkPath={"/"} icon={<AccountBoxIcon />} text="My Account" />}
          <CustomListItem linkPath={"/"} icon={<EmailIcon />} text="Post snippet" />
          {isAuth ?? <CustomListItem linkPath={"/"} icon={<ContactMailIcon />} text="My snippets" />}
          <CustomListItem linkPath={"/"} icon={<QuestionAnswerIcon />} text="Questions" />
          <CustomListItem linkPath={"/"} icon={<GroupIcon />} text="Users" />
        </List>
      </Box>
    </div>
  )
}

export default SideBar;