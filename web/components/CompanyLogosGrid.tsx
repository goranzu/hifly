/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { ImageProps } from "../lib/types";
import { fadeIn } from "../styles/keyframes";
import ContainerStyled from "./styled/ContainerStyled";

const companyLogos: ImageProps[] = [
  {
    width: "160",
    height: "55",
    src: "https://res.cloudinary.com/djxpd9whf/image/upload/v1629969063/hifly/logos/logo3_180x_gmwkoo.webp",
    alt: "example logo 1",
  },
  {
    width: "160",
    height: "23",
    src: "https://res.cloudinary.com/djxpd9whf/image/upload/v1629969063/hifly/logos/logo2_180x_kjfpic.webp",
    alt: "example logo 2",
  },
  {
    width: "160",
    height: "111",
    src: "https://res.cloudinary.com/djxpd9whf/image/upload/v1629969063/hifly/logos/logo4_180x_gbg9eq.webp",
    alt: "example logo 1",
  },
  {
    width: "160",
    height: "73",
    src: "https://res.cloudinary.com/djxpd9whf/image/upload/v1629969063/hifly/logos/logo1_180x_bgj6ha.webp",
    alt: "example logo 1",
  },
];

function CompanyLogosGrid() {
  const animationDuration = 0.5;

  const animation = `${fadeIn} ${animationDuration}s ease forwards`;
  return (
    <ContainerStyled
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        alignItems: "center",
        justifyItems: "center",
        gap: "2rem",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      {companyLogos.map(({ width, height, alt, src }, index) => (
        <Image
          width={width}
          height={height}
          alt={alt}
          src={src}
          key={src}
          css={{
            opacity: 0,
            animation,
            animationDelay:
              index > 0 ? `${animationDuration * (0.3 * index)}s` : "",
          }}
        />
      ))}
    </ContainerStyled>
  );
}

export default CompanyLogosGrid;
