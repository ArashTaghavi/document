/** @format */
"use client";

import Link from "next/link";
import { LI, UL } from "@/app/Components/List";
import { LinkItem } from "@/app/types";
import { useMemo, useState } from "react";

type PropsType = { links: LinkItem[] };

export const Toc = ({ links }: PropsType) => {
  const [query, setQuery] = useState("");

  const filteredLinks = useMemo(() => {
    if (!query.trim()) return links;

    return links.filter((link) =>
      link.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [links, query]);

  return (
    <>
      <input
        id="search"
        placeholder="جستجو..."
        className="border rounded-lg p-2 w-96 px-5"
        onChange={(e) => setQuery(e.target.value)}
      />
      <UL>
        {filteredLinks.map((link) => (
          <LI key={link.href}>
            <Link href={link.href}>{link.title}</Link>
          </LI>
        ))}
      </UL>
    </>
  );
};
