import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { useNprogress } from "../lib/hooks/useNprogress";
import * as colors from "../styles/colors";

import "modern-css-reset";
import "nprogress/nprogress.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  useNprogress();

  return (
    <>
      <Global
        styles={css`
          :root {
            --type-scale: 1.25;
            --base-size: 1rem;
            --fs-400: var(--base-size);
            --fs-300: calc(var(--fs-400) / var(--type-scale));
            --fs-200: calc(var(--fs-300) / var(--type-scale));
            --fs-100: calc(var(--fs-200) / var(--type-scale));

            --fs-500: calc(var(--fs-400) * var(--type-scale));
            --fs-600: calc(var(--fs-500) * var(--type-scale));
            --fs-700: calc(var(--fs-600) * var(--type-scale));
            --fs-800: calc(var(--fs-700) * var(--type-scale));
            --fs-900: calc(var(--fs-800) * var(--type-scale));
          }

          body {
            font-family: "Work Sans", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            font-size: var(--fs-400);

            scroll-behavior: smooth;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Chivo", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-weight: 700;
          }

          h1 {
            font-size: var(--fs-800);
          }

          h2 {
            font-size: var(--fs-700);
          }

          h3 {
            font-size: var(--fs-600);
          }

          /* override nprogress */
          #nprogress .bar {
            background: ${colors.primary_100};
            height: 3px;
          }

          #nprogress .peg {
            box-shadow: 0 0 10px ${colors.primary_100},
              0 0 5px ${colors.primary_100};
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;

            border-top-color: ${colors.primary_100};
            border-left-color: ${colors.primary_100};
            border-radius: 50%;
          }
          /* end nprogress */

          @media (min-width: 800px) {
            :root {
              --base-size: 1.125rem;
            }
          }
        `}
      />
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </>
  );
}
export default MyApp;
