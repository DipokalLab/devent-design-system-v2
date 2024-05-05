/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

const sizeSet = {
  sm: {
    padding: "0.4rem 0.6rem",
  },
  md: {
    padding: "0.8rem 1rem",
  },
};

function Box({
  children,
  isShadow = false,
  size = "md",
}: {
  children?: any;
  isShadow?: boolean;
  size?: "sm" | "md";
}) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      css={css({
        padding: sizeSet[size].padding,
        marginTop: "0.6rem",
        borderRadius: "0.8rem",
        border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        backgroundColor: colorPalette[colorMode].white,
        boxShadow: isShadow ? "0 7px 20px #93949e20" : "none",
      })}
    >
      {children}
    </div>
  );
}

export { Box };
