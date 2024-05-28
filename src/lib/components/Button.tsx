/** @jsxImportSource @emotion/react */

import React, { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from "react";

import { css } from "@emotion/react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: any;
  color?: "blue" | "green" | "red" | "white" | "light" | "black" | "text";
  fillType?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  display?: "none" | "flex" | "block";
  shape?: "default" | "box" | "rounded";
  justifyContent?: "center" | "flex-end" | "flex-start";
  width?: string;
  prefixComponent?: any;
  subfixComponent?: any;

  onClick?: any;
  disabled?: boolean;
}


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

function Button(props: ButtonProps) {
  const {
    children,
    color = "black",
    fillType = "fill",
    size = "md",
    shape = "default",
    display = "block",
    justifyContent = "center",
    width = "",
    prefixComponent,
    subfixComponent,
    disabled = false,
  } = props;
  const [colorMode, setColorMode] = useColorMode();

  const colorSet = {
    blue: {
      backgroundColor: colorPalette[colorMode].blue500,
      color: "#ffffff",
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].blue600,
      },
      disabled: {
        backgroundColor: colorPalette[colorMode].blue400,
        color: "#F0F0F4",
      },
    },
    green: {
      backgroundColor: colorPalette[colorMode].green500,
      color: "#ffffff",
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].green600,
      },
      disabled: {
        backgroundColor: colorPalette[colorMode].green400,
        color: "#F0F0F4",
      },
    },
    red: {
      backgroundColor: colorPalette[colorMode].red500,
      color: "#ffffff",
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].red600,
      },
      disabled: {
        backgroundColor: colorPalette[colorMode].red400,
        color: "#F0F0F4",
      },
    },
    white: {
      backgroundColor: colorPalette[colorMode].white,
      color: colorPalette[colorMode].black,
      border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
      hover: {
        backgroundColor: colorPalette[colorMode].gray050,
      },
      disabled: {
        backgroundColor: "#97979c",
        color: colorPalette[colorMode].gray050,
      },
    },
    light: {
      backgroundColor: colorPalette[colorMode].gray050,
      color: colorPalette[colorMode].black,
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].gray100,
      },
      disabled: {
        backgroundColor: "#5b5b5c",
        color: "#97979c",
      },
    },
    black: {
      backgroundColor: colorPalette[colorMode].black,
      color: colorPalette[colorMode].white,
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].gray950,
      },
      disabled: {
        backgroundColor: "#000000",
        color: colorPalette[colorMode].gray050,
      },
    },
    text: {
      backgroundColor: "transparent",
      color: colorPalette[colorMode].black,
      border: "none",
      hover: {
        backgroundColor: colorPalette[colorMode].gray050,
      },
      disabled: {
        backgroundColor: "#ffffff",
        color: colorPalette[colorMode].gray050,
      },
    },
  };

  const style = css({
    width: width,
    display: display,
    border: "none",
    backgroundColor:
      fillType == "fill" ? colorSet[color].backgroundColor : "transparent",
    color:
      fillType == "fill" ? colorSet[color].color : colorSet[color].backgroundColor,
    outline:
      fillType == "fill"
        ? colorSet[color].border
        : `0.1rem solid ${colorSet[color].backgroundColor}`,
    borderRadius: shapeSet[shape].borderRadius,
    padding: sizeSet[size].padding,
    fontSize: sizeSet[size].fontSize,
    fontWeight: 400,
    fontFamily: "'Noto Sans KR', sans-serif",
    transition: "0.2s",
    cursor: "pointer",
    justifyContent: justifyContent,
    alignItems: "center",
    ":hover": {
      backgroundColor:
        fillType == "fill"
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
    <button {...props} disabled={disabled} css={style}>
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "0.4rem",
        })}
      >
        {prefixComponent}
        {children}
        {subfixComponent}
      </div>
    </button>
  );
}

export { Button };
