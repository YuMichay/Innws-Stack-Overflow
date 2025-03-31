import { Typography } from "@mui/material";
import { EditPost } from "../../features";

const EditPostPage: React.FC = () => {
  return (
    <div className="page__edit-post">
    <Typography variant="h6">Change Your Snippet!</Typography>
    <EditPost />
  </div>
  )
}

export default EditPostPage;