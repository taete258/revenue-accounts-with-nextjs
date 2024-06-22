"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";
import React from "react";

type Props = ComponentProps<"button"> & {
  color: "primary" | "secondary";
};

const SubmitButton: React.FC<Props> = ({ children, ...props }) => {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type="submit"
      aria-disabled={pending}
      className={clsx(
        "flex flex-row gap-x-2 items-center justify-center rounded-md px-4 py-2",
        {
          "bg-gray-300": isPending,
          "bg-primary text-white": props.color === "primary",
          "bg-white border border-gray-300 text-gray-600":
            props.color === "secondary",
        }
      )}
    >
      {isPending && <CgSpinner className="animate-spin" size={24} />}
      {children}
    </button>
  );
};

export default React.memo(SubmitButton);
