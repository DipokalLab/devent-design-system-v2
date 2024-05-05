/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

type CheckboxType = {
  children?: any;
  onClick?: any;
  checked?: boolean;
  disabled?: boolean;
};

function Checkbox({
  children,
  checked,
  onClick,
  disabled = false,
}: CheckboxType) {
  const [colorMode, setColorMode] = useColorMode();

  const handleClick = (e: any) => {
    if (disabled) {
      return 0;
    }
    onClick(e);
  };
  return (
    <label
      onClick={handleClick}
      css={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.8rem",
        cursor: "pointer",
      })}
    >
      <span
        css={css({
          backgroundColor: checked
            ? "#2B6EEF"
            : colorPalette[colorMode].gray050,
          transition: "0.1s",
          width: "1rem",
          height: "1rem",
          borderRadius: "3px",
          boxShadow: "0 1px 3px #93949e40",
        })}
      >
        <svg width={16} height={16} viewBox="0 0 20 20">
          <path
            d="M14 7L8.5 12.5L6 10"
            fill={checked ? "#2B6EEF" : colorPalette[colorMode].gray050}
            stroke={checked ? "#ffffff" : colorPalette[colorMode].gray050}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            css={css({
              transition: "0.1s",
            })}
          ></path>
        </svg>
      </span>
      <span
        css={css({
          fontWeight: 400,
          fontFamily: "'Noto Sans KR', sans-serif",
        })}
      >
        {children}
      </span>
    </label>
  );
}

export { Checkbox };
