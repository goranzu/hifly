/** @jsxImportSource @emotion/react */

import Dialog, { DialogOverlay } from "@reach/dialog";
import type { NextPage } from "next";
import * as mq from "../styles/mq";
import * as colors from "../styles/colors";
import { useState } from "react";

import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import IconButtonStyled from "../components/styled/IconButtonStyled";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <main>
      <Dialog
        isOpen={showModal}
        onDismiss={closeModal}
        css={{
          zIndex: 200,
          height: "500px",
          width: "100%",
          maxWidth: "900px",
          position: "relative",
          paddingTop: "3rem",
          paddingLeft: 0,
          paddingRight: 0,

          [mq.mq_100]: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        }}
      >
        <IconButtonStyled
          css={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={closeModal}
        >
          <VisuallyHidden>Close modal</VisuallyHidden>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </IconButtonStyled>
        <iframe
          css={{
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/s7nNOrYx6N8?autohide=0&autoplay=0"
          allowFullScreen
        ></iframe>
      </Dialog>
      <div
        css={{
          height: "350px",
          width: "100vw",
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
      </div>
      <h1>Main</h1>
    </main>
  );
};

export default Home;
