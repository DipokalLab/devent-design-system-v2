/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";

type FlexType = {
  children?: any;
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "center" | "start" | "end";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
};

function Flex({
  children,
  justifyContent,
  alignItems,
  flexDirection,
}: FlexType) {
  return (
    <div
      css={css({
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      })}
    >
      {children}
    </div>
  );
}

export { Flex };
