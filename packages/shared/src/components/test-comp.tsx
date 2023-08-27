import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
};
export const SharedButton = ({ ...props }: Props) => {
  return <button
    className="bg-black text-white p-2 rounded cursor-pointer"
  onClick={props.onClick}>{props.text}</button>;
};
