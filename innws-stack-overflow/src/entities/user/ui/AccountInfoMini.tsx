import { Typography } from '@mui/material';
import { CustomAvatar } from '../../../shared';

const AccountInfoMini: React.FC = () => {
  const username = localStorage.getItem('username')?.slice(1, -1);

  return (
    <div className="account-mini">
      <CustomAvatar />
      <Typography variant="h6">{username}</Typography>
    </div>
  )
}

export default AccountInfoMini;