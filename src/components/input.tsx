import {InputHTMLAttributes} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({label, id, ...otherProps}: Props) {
  return (
    <div className="flex w-full flex-col md:w-auto">
      {label ? (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      ) : null}

      <input className="h-6 px-1" {...otherProps} id={id} />
    </div>
  );
}
