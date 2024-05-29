/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";
import { css, keyframes } from "@emotion/react";

const load = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

function Loading({ children, href = "#" }: { children?: any; href?: string }) {
  const LoadingCss = css({
    animation: `${load} 1s infinite`,
    fontSize: "0.9rem",
  });

  return (
    <span css={LoadingCss} className="material-symbols-outlined">
      progress_activity
    </span>
  );
}

export { Loading };
