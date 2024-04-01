/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

function Container({ children }: { children: any }) {
  return (
    <div
      css={css({
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "0.4rem 0rem 0.25rem 0rem",
        width: "100%",
      })}
    >
      <div
        css={css({
          width: "100%",
          padding: "4rem 1rem",
          "@media (min-width: 1200px)": {
            maxWidth: "1200px",
          },
        })}
      >
        {children}
      </div>
    </div>
  );
}

export { Container };
