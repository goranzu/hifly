/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import * as mq from "../styles/mq";
import * as colors from "../styles/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "@reach/dialog/styles.css";
import ContainerStyled from "../components/styled/ContainerStyled";
import Testimonial from "../components/Testimonial";
import useIsVisible from "../lib/hooks/useIsVisible";
import Modal from "../components/Modal";

const fadeIn = keyframes`
to {
    opacity: 1;
}
`;

const PStyled = styled.p`
  font-weight: 700;
`;

type ImageProps = {
  width: string;
  height: string;
  src: string;
  alt: string;
};

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

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const isSectionVisible = useIsVisible(divRef);

  if (isSectionVisible && divRef.current) {
    divRef.current.style.opacity = "1";
  }

  const animationDuration = 0.5;

  const animation = `${fadeIn} ${animationDuration}s ease forwards`;

  return (
    <main>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        ariaLabel="youtube video"
      >
        <iframe
          css={{
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/s7nNOrYx6N8?autohide=0&autoplay=0"
          allowFullScreen
        ></iframe>
      </Modal>

      <section
        css={{
          height: "350px",
          width: "100%",
          position: "relative",

          "&:before": {
            content: "''",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.0) 40%, rgba(98, 133, 155, 0.66) 100%)`,
            position: "absolute",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            pointerEvents: "none",
          },

          [mq.mq_100]: {
            height: "750px",
          },
        }}
      >
        <video
          src="/videos/hero_video_gif_style.mp4"
          loop
          muted
          playsInline
          autoPlay
          css={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        ></video>
        <div
          css={{
            alignSelf: "end",
            justifySelf: "center",
            textAlign: "center",
            marginBottom: "1rem",
            color: colors.neutral__100,
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <h1
            css={{
              [mq.mq_100]: {
                fontSize: "5rem",
              },
            }}
          >
            Get Organized
          </h1>
          <button
            onClick={openModal}
            css={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0.5rem 1.5rem",
              border: `3px solid ${colors.neutral__100}`,
              backgroundColor: "transparent",
              color: colors.neutral__100,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Watch the video</span>
          </button>
        </div>
      </section>
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
      <section>
        <ContainerStyled
          ref={divRef}
          css={{
            display: "grid",
            gap: "1.5rem",
            opacity: 0,
            transition: "opacity 0.1s linear",
            [mq.mq_100]: {
              gridTemplateColumns: "minmax(auto, 500px) 1fr",
            },
          }}
        >
          <Image
            css={{ objectFit: "cover" }}
            width="540px"
            height="360px"
            alt="organized desk"
            src="https://res.cloudinary.com/djxpd9whf/image/upload/v1629998771/hifly/images/hero_2378e298-fa9e-47d2-b8bd-f4b4159eca6e_540x_uzg3q1.jpg"
          />
          <div
            css={{
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "90%",

              [mq.mq_100]: {
                alignSelf: "center",
                justifySelf: "end",
              },
            }}
          >
            <p
              css={{
                textTransform: "uppercase",
                letterSpacing: 2.5,
              }}
            >
              An easy answer to
            </p>
            <h2>Desk decluttering</h2>
            <p css={{ marginTop: ".5rem" }}>
              Our desks are where our ideas come to life. The small change of
              decluttering your desk with our Gather organization system will
              work wonders for peace of mind and productivity.
            </p>
          </div>
        </ContainerStyled>

        <div
          css={{
            marginTop: "4rem",
            backgroundColor: "#dedfe1",
            paddingBottom: "1rem",
            [mq.mq_100]: {
              paddingBottom: 0,
            },
          }}
        >
          <div
            css={{
              position: "relative",

              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              [mq.mq_100]: {
                height: "600px",
              },
            }}
          >
            <video
              css={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                [mq.mq_100]: {
                  maxWidth: "100%",
                  height: "100%",
                },
              }}
              src="/videos/lifestyle.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div
              css={{
                padding: "2rem",
                backgroundColor: colors.neutral__100,
                width: "95%",
                position: "relative",
                marginTop: "-0.5rem",
                "* + *": {
                  marginTop: "1rem",
                },

                [mq.mq_100]: {
                  maxWidth: "400px",
                  position: "absolute",
                  left: "70px",
                  top: "100px",
                  opacity: 0,
                  animation: `${fadeIn} 1s forwards`,
                },
              }}
            >
              <h2>Everything within reach.</h2>
              <p>
                Gather&apos;s modular system means there&apos;s a place for all
                the desk accessories you frequently reach for. Pens, paper,
                headphones, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section css={{ marginTop: "3rem" }}>
        <div
          css={{
            maxWidth: "1900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Swiper
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (_, className) => {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            modules={[Pagination]}
            watchSlidesProgress={true}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <Testimonial isActive={isActive}>
                  <p>
                    Simply genius, my desk has never looked better. Beutiful
                    craftmanship too.
                  </p>
                  <PStyled>Gizmodo</PStyled>
                </Testimonial>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Testimonial isActive={isActive}>
                  <p>
                    I never realized what a distraction my cluttered desk was
                    until Gather fixed it.
                  </p>
                  <PStyled>Techcrunch</PStyled>
                </Testimonial>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Testimonial isActive={isActive}>
                  <p>
                    I can focus so much more easily now that I don&apos; have
                    the desk of a small child.
                  </p>
                  <PStyled>New York Times</PStyled>
                </Testimonial>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Testimonial isActive={isActive}>
                  <p>
                    A fantastic product. I&apos;m surprised how much more of a
                    difference it has made.
                  </p>
                  <PStyled>Elon Musk</PStyled>
                </Testimonial>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="custom-pagination"></div>
      </section>

      <section
        css={{
          marginTop: "3rem",
          position: "relative",
          height: "600px",
          //   [mq.mq_100]: { height: "600px" },
        }}
      >
        <div>
          <Image
            src="/images/kitchen_2400x.jpg"
            width="2400"
            height="3275"
            alt="kitchen"
            layout="fill"
            css={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          css={{
            backgroundColor: colors.neutral__100,
            padding: "1rem 2rem",
            position: "absolute",
            left: "50%",
            bottom: 30,
            maxWidth: "575px",
            transform: "translateX(-50%)",
            width: "100%",

            "* + *": {
              marginTop: ".5rem",
            },

            [mq.mq_200]: {
              transform: "unset",
              left: "70px",
              bottom: "unset",
              top: "70px",
              maxWidth: "380px",
              padding: "3rem",
            },
          }}
        >
          <p
            css={{
              textDecoration: "none",
              fontWeight: 300,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Lightweight
          </p>
          <h3>Bring it anywhere.</h3>
          <p>
            Gather isn&apos;t limited to your desk, take it to the kitchen and
            create the perfect recipe and kitchen tool organizer.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
