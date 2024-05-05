/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

function Badge({ children, onClick }: { children?: any; onClick?: any }) {
  const [colorMode, setColorMode] = useColorMode();

  const handleClick = (e: any) => {
    try {
      onClick(e);
    } catch (error) {}
  };
  return (
    <span
      onClick={handleClick}
      css={css({
        borderRadius: "0.4rem",
        fontSize: "0.7rem",
        padding: "0.2rem 0.4rem",
        color: colorPalette[colorMode].white,
        backgroundColor: colorPalette[colorMode].black,
        fontFamily: "'Noto Sans KR', sans-serif",
      })}
    >
      {children}
    </span>
  );
}

export { Badge };
