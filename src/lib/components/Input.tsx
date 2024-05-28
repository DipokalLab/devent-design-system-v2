/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import styled from "@emotion/styled";

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

type TextAreaType = {
  value?: any;
  onChange?: any;
  rows?: number;
  placeholder?: string;
  name?: string;
  autosize?: boolean;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange(e);
    } catch (error) {}
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13) {
      onEnter();
    }
  };

  const FlexBody = styled.div({
    display: "flex",
    flexDirection: "column",
  });

  const Input = styled.input({
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
  });

  const BottomLabel = styled.label({
    color: outlineSet[String(vaild)].color,
    fontSize: "0.7rem",
    paddingTop: "0.4rem",
    justifyItems: "end",
    textAlign: "end",
  });

  return (
    <FlexBody>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        name={name}
      />

      <BottomLabel htmlFor={name}>{vaildMessage}</BottomLabel>
    </FlexBody>
  );
}

function Textarea({
  value = "",
  placeholder = "",
  onChange,
  name = "name",
  rows = 2,
  autosize = false,
}: TextAreaType) {
  const [colorMode, setColorMode] = useColorMode();

  const colorSet = {
    light: {
      backgroundColor: colorPalette[colorMode].gray050,
    },
    white: {
      backgroundColor: colorPalette[colorMode].white,
    },
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hiddenInputRef = useRef<HTMLTextAreaElement | any>();
  const [inputHeight, setInputHeight] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      if (autosize) setInputHeight(getHeight());
      onChange(e);
    } catch (error) {}
  };
  const handleChangeHidden = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};

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
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        rows={rows}
        ref={inputRef}
        value={value}
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
        onChange={handleChangeHidden}
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

  const Select = styled.select({
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
  });

  return (
    <Select onChange={onChange}>
      <option disabled selected value="none">
        {label}
      </option>

      {children}
    </Select>
  );
}

export { Input, Select, Textarea };
