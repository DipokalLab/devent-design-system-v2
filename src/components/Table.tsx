/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { createPortal, render } from "react-dom";
import { createRoot } from "react-dom/client";

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
  return (
    <tr
      css={css({
        borderRadius: "0.6rem",

        backgroundColor: isHead ? "#F0F0F4" : "#ffffff",
        color: isHead ? "#828287" : "#000000",
        borderBottom: isHead ? "none" : "0.1rem solid #F0F0F4",

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
