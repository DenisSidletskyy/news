import {SelectHTMLAttributes} from "react";
import {SelectOption} from "@/lib/types";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<SelectOption>;
  label?: string;
  isShowNone?: boolean;
};

export default function Select({options, label, id, isShowNone, ...otherProps}: Props) {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      ) : null}

      <select className="h-6 w-full" {...otherProps} id={id}>
        {isShowNone ? <option value="">None</option> : null}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
