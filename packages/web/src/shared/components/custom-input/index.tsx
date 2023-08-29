import React, {LegacyRef, forwardRef} from "react";
import clsx from "clsx";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export const CustomInput = forwardRef((props: CustomInputProps, ref: unknown) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="text-sm text-gray-500 capitalize">{props.label}</label>
      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement>}
        type={props.type}
        className={clsx(props.className, "border-2 border-solid border-gray-400 p-2 rounded-md outline-none focus:outline-none focus:border-blue-500")}
      />
      {
        props.error && (
          <span className="text-sm text-red-500">{props.error}</span>

        )
      }
    </div>
  );
});
