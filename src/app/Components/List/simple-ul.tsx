/** @format */

import React from "react";

type PropTypes = { children: React.ReactNode; title?: string };

export default function SimpleUL({ children, title }: PropTypes) {
    return (
        <div className="p-2">
            {title && <h2 className="font-extrabold text-xl mb-1">{title}</h2>}
            <ul>{children}</ul>
        </div>
    );
}
