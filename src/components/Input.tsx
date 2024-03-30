/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

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

export { Input, Select };
