import { useParams } from "react-router-dom";
import { useUser } from "../api/getUser";
import { CustomAvatar } from "../../../shared";
import { Typography } from "@mui/material";

const UserInfo: React.FC = () => {
  const params = useParams().id;
  const userId = params ? params : 0;
  const userInfo = useUser(+userId).data;
  
  return (
    <div className="user-info-wrapper">
      <CustomAvatar />
      <div className="user-info">
        <Typography variant="h6">{userInfo?.username}</Typography>
        <Typography variant="subtitle2">Id: {userInfo?.id}</Typography>
        <Typography variant="subtitle2">Role: {userInfo?.role}</Typography>
      </div>
    </div>
  )
};

export default UserInfo;