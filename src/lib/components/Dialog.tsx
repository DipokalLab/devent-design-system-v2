/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

type DialogType = {
  children?: any;
  onClose?: any;
  onConfirm?: any;

  isOpen?: boolean;
};

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

function Dialog({ children, onConfirm, onClose, isOpen }: DialogType) {
  const [colorMode, setColorMode] = useColorMode();

  const [open, setOpen] = useState(false);
  const [fadeOutAnimation, setFadeOutAnimation] = useState(
    `${fadeIn} 0.3s forwards`
  );

  const handleClose = (e: any) => {
    if (e.target.id != "dialog") {
      return false;
    }
    setFadeOutAnimation(`${fadeOut} 0.3s forwards`);

    setTimeout(() => {
      onClose();
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setFadeOutAnimation(`${fadeIn} 0.3s forwards`);
    } else {
      setFadeOutAnimation(`${fadeOut} 0.3s forwards`);

      setTimeout(() => {
        onClose();
        setOpen(false);
      }, 300);
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleClose}
      id="dialog"
      css={css({
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",

        zIndex: 3000,
        transition: "0.1s",
      })}
    >
      <div
        css={css({
          width: "100%",
          "@media (min-width: 1000px)": {
            width: "40vw",
          },
          "@media (min-width: 1400px)": {
            width: "30vw",
          },
          margin: "2rem",
          padding: "1.2rem 1.2rem",
          backgroundColor: colorPalette[colorMode].white,
          borderRadius: "0.6rem",
          border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
          boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}40`,
          fontFamily: "'Noto Sans KR', sans-serif",

          //translate: "translateY(-10px)",
          animation: fadeOutAnimation,
        })}
      >
        {children}

        <div
          css={css({
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          })}
        >
          <Button color="white" display="flex" width="100%" onClick={onClose}>
            닫기
          </Button>
          <Button display="flex" width="100%" onClick={onConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Dialog };
