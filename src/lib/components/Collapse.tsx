/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Box } from "./Box";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

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
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      })}
    >
      {children}
    </div>
  );
}

function CollapseItem({ children, title }: { children?: any; title?: any }) {
  const [colorMode, setColorMode] = useColorMode();

  const [isOpen, setIsOpen] = useState(false);
  const [rotateAnimation, setRotateAnimation] = useState(
    `${rotate0} 0.3s forwards`
  );
  const handleClickTitle = () => {
    if (isOpen) {
      setRotateAnimation(`${rotate0} 0.3s forwards`);
    } else {
      setRotateAnimation(`${rotate180} 0.3s forwards`);
    }
    setIsOpen(!isOpen);
  };
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: "0.2rem",
      })}
    >
      <div
        onClick={handleClickTitle}
        css={css({
          display: "flex",
          gap: "1rem",
          padding: "0.2rem 0rem",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: "1.2rem",
          // borderBottom: "0.1rem solid #F0F0F4",
          cursor: "pointer",
        })}
      >
        {title}
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
              isOpen
                ? colorPalette[colorMode].white
                : colorPalette[colorMode].white
            }
            stroke={
              isOpen
                ? colorPalette[colorMode].black
                : colorPalette[colorMode].black
            }
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            css={css({
              transition: "0.1s",
            })}
          ></path>
        </svg>
      </div>
      <div
        css={css({
          visibility: isOpen ? "visible" : "hidden",
          display: isOpen ? "" : "none",
          position: "relative",
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: "1rem",
          animation: isOpen ? `${fadeIn} 1s forwards` : `${fadeOut} 0.3s forwards`

        })}
      >
        <Box>{children}</Box>
      </div>
    </div>
  );
}

export { Collapse, CollapseItem };
