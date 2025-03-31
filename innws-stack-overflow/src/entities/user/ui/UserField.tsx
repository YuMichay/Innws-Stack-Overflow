import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { User } from "../../../shared/types/users";
import { CustomIconButton } from "../../../shared";

interface UserFieldProps {
  user: User;
}

const UserField: React.FC<UserFieldProps> = ({ user }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/users/${user.id}`);
  }

  return (
    <div key={user.id} className="user-field">
      <div className="user-field-icon">
        <PersonIcon />
        <Typography variant="caption">{user.username}</Typography>
      </div>
      <CustomIconButton icon={<MoreVertIcon />} color="primary" disabled={false} onClick={handleClick} />
    </div>
  )
};

export default UserField;