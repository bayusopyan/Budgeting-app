import { TrashIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}

export function TransactionHistory({ color, children }: Props) {
  const defaultColor = "rose-800";
  const getBorderColor = () => `border-r-${color ?? defaultColor}`;
  const getTextColor = () => `text-${color ?? defaultColor}`;

  return (
    <div
      className={`item flex justify-center bg-gray-50 py-2  text-black border-4 ${getBorderColor()}`}
    >
      <button className="px-3">
        <TrashIcon className={`h-6 w-6 ${getTextColor()}`} />
      </button>
      <span className={`block w-full ${getTextColor()}`}>{children}</span>
    </div>
  );
}
