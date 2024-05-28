/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";
import styled from "@emotion/styled";

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
  width?: string;
};

function Flex({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  width,
}: FlexType) {
  const flexStyle = css({
    display: "flex",
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    width: width,
  });

  return <div css={flexStyle}>{children}</div>;
}

export { Flex };
