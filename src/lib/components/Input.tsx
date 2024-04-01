/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

type InputType = {
  type?: string;
  value?: any;
  onChange?: any;
  onEnter?: any;

  placeholder?: string;
  name?: string;
  color?: "light" | "white";
  size?: "md" | "sm";
};

const colorSet = {
  light: {
    backgroundColor: "#F0F0F4",
  },
  white: {
    backgroundColor: "#ffffff",
  },
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
  color = "white",
  size = "md",
}: InputType) {
  const handleChange = (e: any) => {
    try {
      onChange(e);
    } catch (error) {}
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode == 13) {
      onEnter();
    }
  };

  return (
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
        border: "0.1rem solid #F0F0F4",
        backgroundColor: colorSet[color].backgroundColor,
        transition: "0.3s",
        outline: "none",
        ":hover": {
          boxShadow: "0 7px 20px #93949e20",
        },
        ":active,:focus": {
          boxShadow: "0 7px 20px #93949e20",
        },
      })}
    ></input>
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
  const inputRef: any = useRef();

  const hiddenInputRef: any = useRef();
  const [inputHeight, setInputHeight] = useState<number>(0);
  const handleChange = (e: any) => {
    try {
      if (autosize) setInputHeight(getHeight());
      onChange(e);
    } catch (error) {}
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
          border: "0.1rem solid #F0F0F4",
          backgroundColor: colorSet["white"].backgroundColor,
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
  return (
    <select
      css={css({
        background: "#ffffff",
        color: "#000000",
        borderRadius: "0.8rem",
        border: "0.1rem solid #F0F0F4",
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        backgroundColor: "#ffffff",
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
