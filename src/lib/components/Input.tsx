/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

type InputType = {
  type?: string;
  value?: any;
  onChange?: any;
  onEnter?: any;
  vaild?: undefined | true | false;
  vaildMessage?: string;
  placeholder?: string;
  name?: string;
  color?: "light" | "white";
  size?: "md" | "sm";
};

const sizeSet = {
  md: {
    padding: "0.8rem 1rem",
  },
  sm: {
    padding: "0.8rem 0.6rem",
  },
};


function Input({
  type = "text",
  value,
  placeholder,
  onChange,
  onEnter,
  name,
  vaild = undefined,
  vaildMessage = "",
  color = "white",
  size = "md",
}: InputType) {
  const [colorMode, setColorMode] = useColorMode();

  const outlineSet: any = {
    undefined: {
      outline: "none",
      color: "none",
    },
    false: {
      outline: `1px solid ${colorPalette[colorMode].red500}`,
      color: colorPalette[colorMode].red500,
    },
    true: {
      outline: `1px solid ${colorPalette[colorMode].green500}`,
      color: colorPalette[colorMode].green500,
    },
  };


  const colorSet = {
    light: {
      backgroundColor: colorPalette[colorMode].gray050,
    },
    white: {
      backgroundColor: colorPalette[colorMode].white,
    },
  };

  const handleChange = (e: any) => {
    try {
      onChange(e);
    } catch (error) { }
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode == 13) {
      onEnter();
    }
  };

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        name={name}
        css={css({
          padding: sizeSet[size].padding,
          borderRadius: "0.6rem",
          border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
          backgroundColor: colorSet[color].backgroundColor,
          transition: "0.3s",
          color: colorPalette[colorMode].black,

          outline: outlineSet[String(vaild)].outline,
          ":hover": {
            boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}20`,
          },
          ":active,:focus": {
            boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}20`,
          },
        })}
      ></input>

      <label
        css={css({
          color: outlineSet[String(vaild)].color,
          fontSize: "0.7rem",
          paddingTop: "0.4rem",
          justifyItems: "end",
          textAlign: "end",
        })}
        htmlFor={name}
      >
        {vaildMessage}
      </label>
    </div>
  );
}

function Textarea({
  value,
  placeholder,
  onChange,
  name,
  rows = 2,
  autosize = false,
}: {
  value?: any;
  onChange?: any;
  rows?: number;
  placeholder?: string;
  name?: string;
  autosize?: boolean;
}) {
  const [colorMode, setColorMode] = useColorMode();

  const colorSet = {
    light: {
      backgroundColor: colorPalette[colorMode].gray050,
    },
    white: {
      backgroundColor: colorPalette[colorMode].white,
    },
  };

  const inputRef: any = useRef();

  const hiddenInputRef: any = useRef();
  const [inputHeight, setInputHeight] = useState<number>(0);
  const handleChange = (e: any) => {
    try {
      if (autosize) setInputHeight(getHeight());
      onChange(e);
    } catch (error) { }
  };

  const getHeight = () => {
    hiddenInputRef.current.style.height = "auto";

    return Number(hiddenInputRef.current.scrollHeight);
  };

  useEffect(() => {
    setInputHeight(getHeight());
  }, []);

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        position: "relative",
      })}
    >
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        rows={rows}
        ref={inputRef}
        css={css({
          padding: sizeSet["md"].padding,
          borderRadius: "0.6rem",
          border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
          backgroundColor: colorSet["white"].backgroundColor,
          color: colorPalette[colorMode].black,
          transition: "0.3s",
          outline: "none",
          width: "100%",
          height: `${inputHeight}px`,
          ":hover": {
            boxShadow: "0 7px 20px #93949e20",
          },
          ":active,:focus": {
            boxShadow: "0 7px 20px #93949e20",
          },
        })}
      ></textarea>

      <textarea
        value={value}
        rows={rows}
        ref={hiddenInputRef}
        css={css({
          position: "absolute",
          top: "0",
          left: "0",
          visibility: "hidden",
          padding: sizeSet["md"].padding,
          transition: "0.3s",
          outline: "none",
          width: "100%",
        })}
      ></textarea>
    </div>
  );
}

function Select({
  children,
  onChange,
  label = "값을 선택하세요",
}: {
  children?: any;
  onChange?: any;
  label?: string;
}) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <select
      css={css({
        background: colorPalette[colorMode].white,
        color: colorPalette[colorMode].black,
        borderRadius: "0.8rem",
        border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        backgroundColor: colorPalette[colorMode].white,
        padding: "0.7rem 0.8rem",
        transition: "0.3s",
        outline: "none",
        ":hover": {
          boxShadow: "0 7px 20px #93949e20",
        },
        ":active,:focus": {
          boxShadow: "0 7px 20px #93949e20",
        },
      })}
      onChange={onChange}
    >
      <option disabled selected value="none">
        {label}
      </option>

      {children}
    </select>
  );
}

export { Input, Select, Textarea };
