/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";

function A({ children, href = "#" }: { children?: any; href?: string }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <a
      css={css({
        transition: "0.3s",
        color: colorPalette[colorMode].black,
        textDecoration: "none",

        ":hover": {
          textDecoration: "underline",

          textDecorationColor: colorPalette.black,
        },
      })}
      href={href}
    >
      {children}
    </a>
  );
}

export { A };
