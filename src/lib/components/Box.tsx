/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

function Box({
  children,
  isShadow = false,
}: {
  children?: any;
  isShadow?: boolean;
}) {
  return (
    <div
      css={css({
        padding: "0.8rem 1rem",
        marginTop: "0.6rem",
        borderRadius: "0.8rem",
        border: "0.1rem solid #F0F0F4",
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        backgroundColor: "#ffffff",
        boxShadow: isShadow ? "0 7px 20px #93949e20" : "none",
      })}
    >
      {children}
    </div>
  );
}

export { Box };
