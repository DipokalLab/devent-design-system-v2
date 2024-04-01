/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";

const skeletonAnimation = keyframes`
  0% {
    background-color: #F0F0F4;
  }
  100% {
    background-color: #dedee3;
  }
`;

function Skeleton({ height = 10 }: { height?: number }) {
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
