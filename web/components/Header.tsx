/** @jsxImportSource @emotion/react */

import { useCallback, useRef } from "react";
import VisuallyHidden from "@reach/visually-hidden";
import Image from "next/image";
import Link from "next/link";

import ContainerStyled from "./styled/ContainerStyled";
import * as mq from "../styles/mq";
import ListStyled from "./styled/ListStyled";
import HeaderLinkStyled from "./styled/HeaderLinkStyled";
import DropDown from "./Dropdown";
import IconButtonStyled from "./styled/IconButtonStyled";
import * as colors from "../styles/colors";
import { useIsomorphicLayoutEffect } from "../lib/hooks/useIsomorphicLayoutEffect";
import { throttle } from "../lib/utils";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  let headerHeight: undefined | number;

  const handleScroll = useCallback(
    function handleScroll() {
      const y = window.pageYOffset;

      if (y > 500) {
        return;
      }

      if (headerRef.current && headerHeight != null) {
        if (headerHeight + 50 < y) {
          headerRef.current.style.transform = "translateY(100%)";
          headerRef.current.style.left = "0";
          headerRef.current.style.right = "0";
          headerRef.current.style.top = `-${headerHeight}px`;
          headerRef.current.style.position = "fixed";
        } else if (headerHeight + 50 > y) {
          headerRef.current.style.position = "relative";
          headerRef.current.style.top = "0";
          headerRef.current.style.transform = "translateY(0)";
        }
      }
    },
    [headerHeight],
  );

  useIsomorphicLayoutEffect(() => {
    headerHeight = headerRef.current?.getBoundingClientRect().height;
    window.addEventListener("scroll", throttle(handleScroll));

    return () => window.removeEventListener("scroll", throttle(handleScroll));
  }, [handleScroll]);

  return (
    <header
      ref={headerRef}
      css={{
        padding: "1rem 0",
        zIndex: 100,
        backgroundColor: colors.neutral__100,
        transition: "transform .2s linear",
      }}
    >
      <ContainerStyled
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <a> */}
        <div css={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Image
            width="106px"
            height="18px"
            src="/images/icons/logo.svg"
            alt="logo"
          />
          {/* </a> */}
          <nav
            aria-label="Main Navigation"
            css={{
              display: "none",
              [mq.mq_100]: {
                display: "flex",
                //   "* + *": { marginLeft: "2rem" },
              },
            }}
          >
            <ListStyled>
              <DropDown
                name="Gather"
                items={[
                  {
                    name: "Purchase",
                    href: "/purchase",
                  },
                  {
                    name: "Accessories",
                    href: "/accesories",
                  },
                  {
                    name: "F.A.Q",
                    href: "/faq",
                  },
                ]}
              />
              <DropDown
                name="Homewares"
                items={[
                  {
                    name: "View All",
                    href: "/all",
                  },
                  {
                    name: "Mugs",
                    href: "/mugs",
                  },
                  {
                    name: "Organizers",
                    href: "/organizers",
                  },
                  {
                    name: "Prints",
                    href: "/prints",
                  },
                ]}
              />
            </ListStyled>
            <Link href="/" passHref>
              <HeaderLinkStyled>About</HeaderLinkStyled>
            </Link>
            <Link href="/" passHref>
              <HeaderLinkStyled>Blog</HeaderLinkStyled>
            </Link>
          </nav>
        </div>

        <div css={{ display: "flex", gap: "0.25rem" }}>
          <IconButtonStyled>
            <VisuallyHidden>Search</VisuallyHidden>
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </IconButtonStyled>
          <IconButtonStyled
            css={{
              [mq.mq_100]: {
                display: "none",
              },
            }}
          >
            <VisuallyHidden>Show mobile navigation menu</VisuallyHidden>
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </IconButtonStyled>
          <Link href="/signin" passHref>
            <a
              css={{
                margin: 0,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit",
                padding: ".5rem",

                [mq.mq_100]: {
                  display: "flex",
                },
              }}
            >
              <VisuallyHidden>Go to the sign in page</VisuallyHidden>
              <svg
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </a>
          </Link>
          <IconButtonStyled>
            <VisuallyHidden>Show cart</VisuallyHidden>
            <svg
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
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </IconButtonStyled>
        </div>
      </ContainerStyled>
    </header>
  );
}

export default Header;
