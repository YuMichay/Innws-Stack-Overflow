import { Avatar } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';

const CustomAvatar: React.FC = () => {
  return (
    <Avatar sx={{ backgroundColor: "#00FF00", color: "#000000" }}>
      <BadgeIcon />
    </Avatar>
  )
}

export default CustomAvatar;