/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type ToggleType = {
  children?: any;
  onClick?: any;
  checked?: boolean;
  disabled?: boolean;
};

function Toggle({ children, checked, onClick, disabled = false }: ToggleType) {
  const handleClick = (e: any) => {
    if (disabled) {
      return 0;
    }
    onClick(e);
  };
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "row",
        gap: "0.4rem",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "100px",
        cursor: "pointer",
      })}
    >
      <div
        onClick={handleClick}
        css={css({
          position: "relative",
          width: "28px",
          minWidth: "28px",
          height: "1rem",
          borderRadius: "2rem",
          backgroundColor: checked ? "#175dff" : "#dedee3",
          transition: "0.5s",
        })}
      >
        <div
          css={css({
            position: "absolute",
            top: "2px",
            left: checked ? "14px" : "2px",
            width: "12px",
            height: "12px",
            borderRadius: "3rem",
            backgroundColor: "#ffffff",
            transition: "0.3s",
            boxShadow: "0 1px 5px #93949e60",
          })}
        ></div>
      </div>
      <p css={css({ fontSize: "0.8rem" })}>{children}</p>
    </div>
  );
}

export { Toggle };
