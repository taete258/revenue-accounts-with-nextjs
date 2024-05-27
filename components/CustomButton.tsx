import { Button } from "@mantine/core";
import clsx from "clsx";
import React from "react";

type CustomButtonProps = {
  isLoading?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  isLoading,
  onClick,
  children,
}) => {
  return (
    <Button
      fullWidth
      className="text-foreground btn-primary hover:bg-btn-background-hover flex flex-row gap-2"
      disabled={isLoading}
      onClick={onClick}
      color={clsx({
        "opacity-50": isLoading,
      })}
    >
      {children}
    </Button>
  );
};

export default React.memo(CustomButton);
