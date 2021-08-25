/** @jsxImportSource @emotion/react */

import Link from "next/link";
import ListStyled from "./styled/ListStyled";
import * as colors from "../styles/colors";
import HeaderLinkStyled from "./styled/HeaderLinkStyled";
import { useState } from "react";

interface DropdownProps {
  items: { href: string; name: string }[];
  name: string;
}

function DropDown({ items, name }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      css={{ position: "relative" }}
      onMouseOver={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setTimeout(() => setIsExpanded(false), 500);
      }}
      onFocus={() => setIsExpanded(true)}
    >
      <Link href="/gather" passHref>
        <HeaderLinkStyled
          css={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
          }}
          aria-haspopup
          aria-expanded="false"
        >
          {name}
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </HeaderLinkStyled>
      </Link>

      <ListStyled
        css={{
          flexDirection: "column",
          alignItems: "start",
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: "translateY(100%)",
          backgroundColor: colors.neutral__100,
          minWidth: "100%",
          visibility: isExpanded ? "visible" : "hidden",
        }}
      >
        {items.map((item, i, arr) => {
          const isLast = i === arr.length - 1;
          return (
            <Link href={item.href} passHref key={item.href}>
              <HeaderLinkStyled
                css={{
                  transition: "transform .1s linear",
                  ":hover": {
                    transform: "translateX(10px)",
                  },
                  ":focus": {
                    transform: "translateX(10px)",
                  },
                }}
                onBlur={isLast ? () => setIsExpanded(false) : undefined}
              >
                {item.name}
              </HeaderLinkStyled>
            </Link>
          );
        })}
      </ListStyled>
    </li>
  );
}

export default DropDown;
