import { Typography } from "@mui/material";
import { CreatePost } from "../../features";

const CreatePostPage: React.FC = () => {
  return (
    <div className="page__create-post">
      <Typography variant="h6">Create New Snippet!</Typography>
      <CreatePost />
    </div>
  )
}

export default CreatePostPage;