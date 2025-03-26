import { Badge, IconButton } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { IconButtonPropsColorOverrides } from "@mui/material/IconButton";
import React from "react";

import { getColorStyle } from "../utils/colorUtils";

interface CustomIconButtonProps {
  count: number,
  icon: React.ReactNode,
  color: OverridableStringUnion<
    "default" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    IconButtonPropsColorOverrides
  > | string,
  disabled: boolean,
  onClick: () => void,
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ count, icon, color, disabled, onClick }) => {
  const colorProps = getColorStyle(color);
  
  return (
    <IconButton {...colorProps} onClick={onClick} disabled={disabled}>
      <Badge badgeContent={count} color="secondary" >
        {icon}
      </Badge>
    </IconButton>
  )
}

export default CustomIconButton;