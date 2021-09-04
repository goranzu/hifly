/** @jsxImportSource @emotion/react */

import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import IconButtonStyled from "./styled/IconButtonStyled";
import * as mq from "../styles/mq";

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
  ariaLabel: string;
}

function Modal({ showModal, closeModal, children, ariaLabel }: ModalProps) {
  return (
    <Dialog
      isOpen={showModal}
      onDismiss={closeModal}
      aria-label={ariaLabel}
      css={{
        zIndex: 200,
        height: "500px",
        width: "100%",
        maxWidth: "900px",
        position: "relative",
        padding: "3rem 0",

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
      {children}
    </Dialog>
  );
}

export default Modal;
