/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { createPortal, render } from "react-dom";
import { createRoot } from "react-dom/client";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

function Table({ children }: { children?: any }) {
  return (
    <table
      css={css({
        borderCollapse: "collapse",
        borderSpacing: "0px",
        width: "100%",
      })}
    >
      {children}
    </table>
  );
}

function TableRow({
  children,
  isHead = false,
}: {
  children?: any;
  isHead?: any;
}) {
  const [colorMode, setColorMode] = useColorMode();

  if (isHead) {
    return (
      <tr
        css={css({
          borderRadius: "0.6rem",

          backgroundColor: colorPalette[colorMode].gray050,
          color: colorPalette[colorMode].gray950,
          borderBottom: "none",

          padding: "0.6rem",
        })}
      >
        {children}
      </tr>
    );
  }

  return (
    <tr
      css={css({
        borderRadius: "0.6rem",

        backgroundColor: colorPalette[colorMode].white,
        color: colorPalette[colorMode].dark,
        borderBottom: `0.1rem solid ${colorPalette[colorMode].gray050}`,

        padding: "0.6rem",
      })}
    >
      {children}
    </tr>
  );
}

function TableItem({ children }: { children?: any }) {
  return (
    <td
      css={css({
        padding: "0.6rem 1rem",
        borderCollapse: "collapse",
        borderSpacing: "0px",
        fontFamily: "'Noto Sans KR', sans-serif",
        ":first-child": {
          borderTopLeftRadius: "0.6rem",
          borderBottomLeftRadius: "0.6rem",
        },
        ":last-child": {
          borderTopRightRadius: "0.6rem",
          borderBottomRightRadius: "0.6rem",
        },
      })}
    >
      {children}
    </td>
  );
}

export { Table, TableRow, TableItem };
