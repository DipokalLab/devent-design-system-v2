/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import styled from "@emotion/styled";

type DialogType = {
  children?: any;
  onClose?: any;
  onConfirm?: any;
  isOpen?: boolean;
};

const fadeInWithTransform = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 40%;
  }
  100% {
    transform: translateY(0px);
    opacity: 100%;
  }
`;

const fadeOutWithTransform = keyframes`
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
    `${fadeInWithTransform} 0.3s forwards`
  );

  const handleClose = (e: any) => {
    if (e.target.id != "dialog") {
      return false;
    }

    setFadeOutAnimation(`${fadeOutWithTransform} 0.3s forwards`);
    setTimeout(() => {
      onClose();
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setFadeOutAnimation(`${fadeInWithTransform} 0.3s forwards`);
    } else {
      setFadeOutAnimation(`${fadeOutWithTransform} 0.3s forwards`);
      setTimeout(() => {
        onClose();
        setOpen(false);
      }, 300);
    }
  }, [isOpen]);

  const CloseBackground = styled.div({
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
  });

  const DialogBody = styled.div({
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
    animation: fadeOutAnimation,
  });

  const DialogAction = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  });

  return (
    <CloseBackground onClick={handleClose} id="dialog">
      <DialogBody>
        {children}

        <DialogAction>
          <Button color="white" display="flex" width="100%" onClick={onClose}>
            닫기
          </Button>
          <Button display="flex" width="100%" onClick={onConfirm}>
            확인
          </Button>
        </DialogAction>
      </DialogBody>
    </CloseBackground>
  );
}

export { Dialog };
