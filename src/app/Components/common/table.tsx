import { ReactNode } from "react";

function Table({ children }: { children: ReactNode }) {
    return (
        <div className="overflow-x-auto my-5">
            <table className="min-w-full text-center border text-sm">
                {children}
            </table>
        </div>
    );
}

function Head({ children }: { children: ReactNode }) {
    return (
        <thead className="bg-gray-100 text-gray-900 tracking-wider">
            {children}
        </thead>
    );
}

function Body({ children }: { children: ReactNode }) {
    return (
        <tbody className="divide-y divide-gray-200">
            {children}
        </tbody>
    );
}

function Row({ children }: { children: ReactNode }) {
    return (
        <tr>
            {children}
        </tr>
    );
}

function Cell({ children, align = "left" }: { children: ReactNode; align?: "left" | "right" }) {
    return (
        <td className={`px-6 py-4 ${align === "right" ? "text-right" : ""}`}>
            {children}
        </td>
    );
}

function HeaderCell({ children }: { children: ReactNode }) {
    return (
        <th className="px-6 py-3 border-b">
            {children}
        </th>
    );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;