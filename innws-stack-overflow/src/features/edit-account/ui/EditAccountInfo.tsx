import { Typography } from "@mui/material";
import EditUserNameForm from "./EditUsernameForm";
import EditPasswordForm from "./EditPasswordForm";

const EditAccountInfo: React.FC = () => {
  return (
    <div className="account-edit">
      <Typography variant="h6" sx={{ padding: "0 1rem", textDecoration:"underline" }}>Edit your profile:</Typography>
      <div className="account-edit-forms">
        <EditUserNameForm />
        <EditPasswordForm />
      </div>
    </div>
  )
}

export default EditAccountInfo;