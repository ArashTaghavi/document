/** @format */

import { ReactNode } from "react";
type PropsType = { children: ReactNode; dark?: boolean };
export default function AiDescription({ children, dark = false }: PropsType) {
  return (
    <div
      className={`${!dark ? "bg-gray-50" : ""} ${dark ? "text-white bg-gray-600" : ""} border-1 rounded-md p-3 my-2`}
    >
      {children}
    </div>
  );
}
