/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";

function Progressbar({
  percent = 10,
  color = "black",
}: {
  percent?: number;
  color?: string;
}) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      css={css({
        width: "100%",
        position: "relative",
        height: "0.4rem",
        transition: "0.3s",
        backgroundColor: colorPalette[colorMode].gray050,
        borderRadius: "0.4rem",
      })}
    >
      <div
        css={css({
          width: percent >= 100 ? "100%" : `${percent}%`,
          position: "absolute",
          backgroundColor: colorPalette[colorMode].black,
          borderRadius: "0.4rem",
          height: "0.4rem",
          transition: "0.3s",
        })}
      ></div>
    </div>
  );
}

export { Progressbar };
