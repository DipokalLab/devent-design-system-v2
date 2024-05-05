/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

function Skeleton({ height = 10 }: { height?: number }) {
  const [colorMode, setColorMode] = useColorMode();

  const skeletonAnimation = keyframes`
  0% {
    background-color: ${colorPalette[colorMode].gray050};
  }
  100% {
    background-color: ${colorPalette[colorMode].gray100};
  }
  `;
  return (
    <div
      css={css({
        borderRadius: "0.8rem",

        width: "100%",
        height: `${height}px`,
        animation: `${skeletonAnimation} 1s linear infinite alternate`,
      })}
    ></div>
  );
}

export { Skeleton };
