const muiColors = ["default", "primary", "secondary", "success", "error", "info", "warning"] as const;

type MuiColor = (typeof muiColors)[number];


export const isMuiColor = (color: string): color is (typeof muiColors)[number] => {
  return muiColors.includes(color as MuiColor);
};

export const getColorStyle = (color: string) => {
  return isMuiColor(color) ? { color } : { sx: { color} };
};