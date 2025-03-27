import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface CustomListItemProps {
  linkPath: string,
  icon: ReactNode,
  text: string,
}

const CustomListItem: React.FC<CustomListItemProps> = ({linkPath, icon, text}) => {
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <ListItem className={getActiveClass(linkPath)} component={Link} to={linkPath} sx={{ "&:hover": { backgroundColor: "#333", borderRadius: "14px" }}}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default CustomListItem;