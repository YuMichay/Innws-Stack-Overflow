import { Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';

import { CustomAvatar, CustomIconButton } from "../../../shared";
import { useProfile } from "../api/getProfileInfo";
import { logoutUserUtils } from "../../../shared/utils/logoutUserUtils";
import { useAuth } from "../../../shared/hooks/useAuth";
import { deleteProfile } from "../../../shared/api/profile";

const AccountInfo: React.FC = () => {
  const { setIsAuth } = useAuth();
  const userInfo = useProfile().data;

  const handleControls = (act: string) => {
    if (act === 'logout') {
      logoutUserUtils(setIsAuth);
    } else if (act === 'delete') {
      deleteProfile();
      logoutUserUtils(setIsAuth);
    }
  }

  return (
    <div className="account-wrapper">
      <CustomAvatar />
      <div className="user-info">
        <Typography variant="h6">{userInfo?.username}</Typography>
        <Typography variant="subtitle2">Id: {userInfo?.id}</Typography>
        <Typography variant="subtitle2">Role: {userInfo?.role}</Typography>
        <div className="account-controls">
          <CustomIconButton icon={<LogoutIcon />} color={"primary"} disabled={false} onClick={() => handleControls("logout")} />
          <CustomIconButton icon={<DeleteIcon />} color={"error"} disabled={false} onClick={() => handleControls("delete")} />
        </div>
      </div>
    </div>
  )
}

export default AccountInfo;