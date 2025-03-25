import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface CustomListItemProps {
  linkPath: string,
  icon: ReactNode,
  text: string,
}

const CustomListItem: React.FC<CustomListItemProps> = ({linkPath, icon, text}) => {
  return (
    <ListItem component={Link} to={linkPath} sx={{ "&:hover": { backgroundColor: "#333" }}}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default CustomListItem;