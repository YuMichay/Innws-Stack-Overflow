import BadgeIcon from '@mui/icons-material/Badge';
import { Avatar, Typography } from '@mui/material';

const AccountInfoMini: React.FC = () => {
  const username = localStorage.getItem('username')?.slice(1, -1);

  return (
    <div className="account-mini">
      <Avatar sx={{ backgroundColor: "#00FF00", color: "#000000" }}>
        <BadgeIcon />
      </Avatar>
      <Typography variant="h6">{username}</Typography>
    </div>
  )
}

export default AccountInfoMini;