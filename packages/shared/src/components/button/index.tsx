import React from "react";
import clsx from "clsx";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const SharedButton = ({ text, onClick, className, ...rest }: Props) => {
  return (
    <button {...rest} onClick={onClick} className={clsx("", className)}>
      {text}
    </button>
  );
};
