/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

function Badge({ children, onClick }: { children?: any; onClick?: any }) {
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
        color: "#ffffff",
        backgroundColor: "#000000",
        fontFamily: "'Noto Sans KR', sans-serif",
      })}
    >
      {children}
    </span>
  );
}

export { Badge };
