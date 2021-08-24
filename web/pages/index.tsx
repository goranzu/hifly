/** @jsxImportSource @emotion/react */

import VisuallyHidden from "@reach/visually-hidden";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ContainerStyled from "../components/styled/ContainerStyled";
import * as mq from "../styles/mq";

const IconButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const headerNavItems: { name: string; href: string; hasDropdown?: boolean }[] =
  [
    {
      name: "Gather",
      href: "/",
      hasDropdown: true,
    },
    {
      name: "Homewares",
      href: "/homewares",
      hasDropdown: true,
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

const HeaderLinkStyled = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
`;

const Home: NextPage = () => {
  return (
    <>
      <header css={{ padding: "1rem 0" }}>
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
              css={{
                display: "none",
                [mq.mq_100]: {
                  display: "flex",
                  //   "* + *": { marginLeft: "2rem" },
                },
              }}
            >
              {headerNavItems.map((item) => {
                return (
                  <Link href={item.href} passHref key={item.href}>
                    {item.hasDropdown ? (
                      <HeaderLinkStyled
                        css={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {item.name}
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
                    ) : (
                      <HeaderLinkStyled>{item.name}</HeaderLinkStyled>
                    )}
                  </Link>
                );
              })}
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
    </>
  );
};

export default Home;
