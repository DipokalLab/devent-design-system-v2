/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Box } from "./Box";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import styled from "@emotion/styled";

const rotate180 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const rotate0 = keyframes`
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

function Collapse({ children }: { children?: any }) {
  const BodyElement = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  });

  return <BodyElement>{children}</BodyElement>;
}

function CollapseItem({ children, title }: { children?: any; title?: any }) {
  const [colorMode, setColorMode] = useColorMode();
  const [itemHeight, setItemHeight] = useState("0px");
  const [isOpen, setIsOpen] = useState(false);
  const [rotateAnimation, setRotateAnimation] = useState(
    `${rotate0} 0.3s forwards`
  );
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClickTitle = () => {
    if (isOpen) {
      setRotateAnimation(`${rotate0} 0.3s forwards`);
      setItemHeight("0px");
    } else {
      setRotateAnimation(`${rotate180} 0.3s forwards`);
      setItemHeight(String(itemRef.current?.scrollHeight) + "px");
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setItemHeight("0px");
  }, []);

  const TopElement = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  });

  const TitleElement = styled.div({
    display: "flex",
    gap: "1rem",
    padding: "0.2rem 0rem",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "1.2rem",
    cursor: "pointer",
  });

  const ContentElement = css({
    //visibility: isOpen ? "visible" : "hidden",
    //display: isOpen ? "" : "none",
    //position: "relative",
    //opacity: 0,
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "1rem",
    overflow: "hidden",
    // animation: isOpen ? `${fadeIn} 1s forwards` : `${fadeOut} 0.3s forwards`,
    height: `${itemHeight}`,
    transition: "0.2s ease-out",
  });

  return (
    <div css={TopElement}>
      <TitleElement onClick={handleClickTitle}>
        {title}
        <Arrow isOpen={isOpen} rotateAnimation={rotateAnimation}></Arrow>
      </TitleElement>

      <div css={ContentElement} ref={itemRef}>
        <Box>{children}</Box>
      </div>
    </div>
  );
}

function Arrow({
  isOpen,
  rotateAnimation,
}: {
  isOpen?: boolean;
  rotateAnimation?: string;
}) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 20 20"
      css={css({
        animation: rotateAnimation,
      })}
    >
      <path
        d="M4 8L10 12L16 8"
        fill={
          isOpen ? colorPalette[colorMode].white : colorPalette[colorMode].white
        }
        stroke={
          isOpen ? colorPalette[colorMode].black : colorPalette[colorMode].black
        }
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        css={css({
          transition: "0.1s",
        })}
      ></path>
    </svg>
  );
}

export { Collapse, CollapseItem };
