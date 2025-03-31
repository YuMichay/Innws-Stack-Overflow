import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { setActiveClass } from "../utils/setActiveClass";

interface CustomListItemProps {
  linkPath: string,
  icon: ReactNode,
  text: string,
}

const CustomListItem: React.FC<CustomListItemProps> = ({linkPath, icon, text}) => {
  const location = useLocation();

  return (
    <ListItem className={setActiveClass(linkPath, location.pathname)} component={Link} to={linkPath} sx={{ "&:hover": { backgroundColor: "#333", borderRadius: "14px" }, margin: "10px", minWidth: "180px" }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default CustomListItem;