import { OverridableStringUnion } from "@mui/types";
import { IconButtonPropsColorOverrides } from "@mui/material/IconButton";

import { markType } from "../../../shared/types/snippets";

export interface MarkButtonProps {
  snippetId: string,
  type: markType,
  count: number,
  icon: React.ReactNode,
  color: OverridableStringUnion<
    "default" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    IconButtonPropsColorOverrides
  > | string,
  disabled: boolean,
}

export interface MarkProps {
  id: number,
  type: markType,
}