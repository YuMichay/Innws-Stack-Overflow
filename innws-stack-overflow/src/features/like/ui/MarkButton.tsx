import { useMark } from "../model/useMark";
import { CustomIconButton } from "../../../shared";
import { MarkButtonProps } from "../types/types";

const MarkButton: React.FC<MarkButtonProps> = ({ snippetId, count, type, icon, color, disabled }) => {
  const { mutate } = useMark();

  return (
    <CustomIconButton
      count={count}
      icon={icon}
      color={color}
      disabled={disabled}
      onClick={() => mutate({ id: +snippetId, type })}
    />
  );
};

export default MarkButton;
