/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

type ModalType = {
  children?: any;
  onClose?: any;
  isOpen?: boolean;
  isScroll?: boolean;
};

const fadeInBackground = keyframes`
0% {
    backdrop-filter: brightness(100%)

}
  100% {
    backdrop-filter: brightness(70%)
  }
`;

const fadeOutBackground = keyframes`
0% {
    backdrop-filter: brightness(70%)

}
  100% {
    backdrop-filter: brightness(100%)
  }
`;

const fadeIn = keyframes`
    0% {
        transform: translateY(-10px);
    opacity: 40%;

    }
    100% {
        transform: translateY(0px);
        opacity: 100%;

    }
`;

const fadeOut = keyframes`
    0% {
        transform: translateY(0px);
    opacity: 100%;

    }
    100% {
        transform: translateY(-10px);
        opacity: 0%;

    }
`;

function Modal({ children, onClose, isOpen, isScroll = false }: ModalType) {
  const [colorMode, setColorMode] = useColorMode();

  const [open, setOpen] = useState(false);
  const [fadeOutAnimation, setFadeOutAnimation] = useState(
    `${fadeIn} 0.3s forwards`
  );
  const [backgroundAnimation, setBackgroundAnimation] = useState(
    `${fadeInBackground} 0.3s forwards`
  );

  const handleClose = (e: any) => {
    if (e.target.id != "modal") {
      return false;
    }
    setFadeOutAnimation(`${fadeOut} 0.3s forwards`);
    setBackgroundAnimation(`${fadeOutBackground} 0.3s forwards`);

    setTimeout(() => {
      onClose();
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setFadeOutAnimation(`${fadeIn} 0.3s forwards`);
      setBackgroundAnimation(`${fadeInBackground} 0.3s forwards`);
    } else {
      setFadeOutAnimation(`${fadeOut} 0.3s forwards`);
      setBackgroundAnimation(`${fadeOutBackground} 0.3s forwards`);

      setTimeout(() => {
        onClose();
        setOpen(false);
      }, 300);
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleClose}
      id="modal"
      css={css({
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        backdropFilter: "brightness(70%)",
        animation: backgroundAnimation,

        zIndex: 3000,
        transition: "0.1s",
      })}
    >
      <div
        css={css({
          width: "100%",
          height: isScroll ? "70vh" : "auto",
          "@media (min-width: 1000px)": {
            width: "40vw",
          },
          "@media (min-width: 1400px)": {
            width: "30vw",
          },
          margin: "2rem",
          padding: "1.6rem 1.6rem",
          backgroundColor: colorPalette[colorMode].white,
          borderRadius: "0.6rem",
          border: `0.1rem solid ${colorPalette[colorMode].gray100}`,
          boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}40`,
          fontFamily: "'Noto Sans KR', sans-serif",
          overflow: "scroll",
          wordBreak: "break-all",
          //translate: "translateY(-10px)",
          animation: fadeOutAnimation,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export { Modal };
