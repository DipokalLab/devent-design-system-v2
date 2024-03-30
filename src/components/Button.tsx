/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type ButtonType = {
  children?: any;
  color?: "blue" | "green" | "red" | "white" | "light" | "black" | "text";
  type?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  display?: "none" | "flex" | "block";
  shape?: "default" | "box" | "rounded";
  width?: string;
  prefix?: any;
  subfix?: any;

  onClick?: any;
  disabled?: boolean;
};

const colorSet = {
  blue: {
    backgroundColor: "#2B6EEF",
    color: "#ffffff",
    border: "none",
    hover: {
      backgroundColor: "#2661d4",
    },
    disabled: {
      backgroundColor: "#2f5399",
      color: "#F0F0F4",
    },
  },
  green: {
    backgroundColor: "#27C868",
    color: "#ffffff",
    border: "none",
    hover: {
      backgroundColor: "#22a858",
    },
    disabled: {
      backgroundColor: "#2c8f54",
      color: "#F0F0F4",
    },
  },
  red: {
    backgroundColor: "#E8291D",
    color: "#ffffff",
    border: "none",
    hover: {
      backgroundColor: "#c7241a",
    },
    disabled: {
      backgroundColor: "#96433e",
      color: "#F0F0F4",
    },
  },
  white: {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "0.1rem solid #F0F0F4",
    hover: {
      backgroundColor: "#F0F0F4",
    },
    disabled: {
      backgroundColor: "#97979c",
      color: "#F0F0F4",
    },
  },
  light: {
    backgroundColor: "#F0F0F4",
    color: "#000000",
    border: "none",
    hover: {
      backgroundColor: "#d4d4d9",
    },
    disabled: {
      backgroundColor: "#5b5b5c",
      color: "#97979c",
    },
  },
  black: {
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    hover: {
      backgroundColor: "#2d2d30",
    },
    disabled: {
      backgroundColor: "#000000",
      color: "#F0F0F4",
    },
  },
  text: {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "none",
    hover: {
      backgroundColor: "#F0F0F4",
    },
    disabled: {
      backgroundColor: "#ffffff",
      color: "#F0F0F4",
    },
  },
};

const sizeSet = {
  sm: {
    padding: "0.5rem 1rem",
    fontSize: "0.8rem",
  },
  md: {
    padding: "0.7rem 1.6rem",
    fontSize: "0.8rem",
  },

  lg: {
    padding: "0.9rem 1.8rem",
    fontSize: "0.9rem",
  },
};

const shapeSet = {
  default: {
    borderRadius: "0.4rem",
  },
  box: {
    borderRadius: "0rem",
  },
  rounded: {
    borderRadius: "3rem",
  },
};

function Button({
  children,
  color = "black",
  type = "fill",
  size = "md",
  shape = "default",
  display = "block",
  width = "",
  prefix,
  subfix,

  onClick,
  disabled = false,
}: ButtonType) {
  const style = css({
    width: width,
    display: display,
    backgroundColor:
      type == "fill" ? colorSet[color].backgroundColor : "transparent",
    color:
      type == "fill" ? colorSet[color].color : colorSet[color].backgroundColor,
    border:
      type == "fill"
        ? colorSet[color].border
        : `0.1rem solid ${colorSet[color].backgroundColor}`,
    borderRadius: shapeSet[shape].borderRadius,
    padding: sizeSet[size].padding,
    fontSize: sizeSet[size].fontSize,
    fontWeight: 400,
    fontFamily: "'Noto Sans KR', sans-serif",
    transition: "0.2s",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    ":hover": {
      backgroundColor:
        type == "fill"
          ? colorSet[color].hover.backgroundColor
          : colorSet[color].backgroundColor,
      color: colorSet[color].color,
      boxShadow: `0 7px 20px ${colorSet[color].backgroundColor}10`,
    },
    ":disabled": {
      backgroundColor: colorSet[color].disabled.backgroundColor,
      color: colorSet[color].disabled.color,
      cursor: "not-allowed",
    },
  });

  return (
    <button onClick={onClick} disabled={disabled} css={style}>
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "0.4rem",
        })}
      >
        {prefix}
        {children}
        {subfix}
      </div>
    </button>
  );
}

export { Button };
