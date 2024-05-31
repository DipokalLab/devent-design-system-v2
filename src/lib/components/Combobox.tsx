/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import { DropdownItem } from "./Dropdown";
import { Button } from "./Button";

const sizeSet = {
  md: {
    padding: "0.8rem 1rem",
  },
  sm: {
    padding: "0.8rem 0.6rem",
  },
};

function Combobox({
  type = "text",
  value,
  placeholder,
  onChange,
  onEnter,
  name,
  list = [""],
}: {
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
  list?: (string | number)[];
}) {
  const [colorMode, setColorMode] = useColorMode();
  const [isClick, setIsClick] = useState(false);
  const [clickValue, setClickValue] = useState("");
  const [showList, setShowList] = useState<(string | number)[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const colorSet = {
    light: {
      backgroundColor: colorPalette[colorMode].gray050,
    },
    white: {
      backgroundColor: colorPalette[colorMode].white,
    },
  };

  const filterItem = (search: string) => {
    return list.filter((item: number | string) => {
      return String(item).indexOf(search.slice(0, search.length - 1)) != -1;
    });
  };

  const sendEventOnChange = (value: string) => {
    onChange({
      target: {
        value: value,
      },
    });
  };

  const handleItemClick = (e: any) => {
    setClickValue(e.target.innerText);
    setIsClick(false);
  };

  const handleClick = () => {
    setIsClick(true);
  };

  const handleDocumentClick = () => {
    setIsClick(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sendEventOnChange(e.target.value);
    const filtered = filterItem(e.target.value);
    setShowList([...filtered]);
  };

  useEffect(() => {
    try {
      sendEventOnChange(clickValue);
    } catch (error) {}
  }, [clickValue]);

  useEffect(() => {
    setShowList(() =>
      list.map((item: number | string) => {
        return String(item);
      })
    );
  }, []);

  return (
    <>
      <div
        onClick={handleDocumentClick}
        css={css({
          display: !isClick ? "none" : "",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "1000",
        })}
      ></div>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: "2000",
          width: "100%",
        })}
      >
        <input
          onClick={handleClick}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          // onKeyUp={handleKeyUp}
          ref={inputRef}
          name={name}
          css={css({
            padding: sizeSet["md"].padding,
            borderRadius: "0.8rem",
            border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
            backgroundColor: colorSet["white"].backgroundColor,
            outline: "none",
            transition: "0.3s",
            color: colorPalette[colorMode].black,
            ":hover": {
              boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}20`,
            },
            ":active,:focus": {
              boxShadow: `0 7px 40px ${colorPalette[colorMode].gray500}20`,
            },
          })}
        ></input>

        <div
          css={css({
            display: isClick ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: "3rem",
            minWidth: inputRef.current?.offsetWidth,
            borderRadius: "0.8rem",
            border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: "0.9rem",
            backgroundColor: colorPalette[colorMode].white,
            boxShadow: "0 7px 20px #93949e20",
            maxHeight: "30vh",
            overflowY: "scroll",
            scrollbarWidth: "none",
          })}
        >
          {showList.length == 0 && (
            <p
              css={css({
                margin: 0,
                padding: "0.8rem 0.3rem",
                color: colorPalette[colorMode].gray200,
                display: "flex",
                justifyContent: "center",
              })}
            >
              데이터가 없습니다
            </p>
          )}
          {showList.map((value) => (
            <div
              css={css({
                padding: "0.3rem",
              })}
            >
              <Button
                onClick={handleItemClick}
                display="flex"
                width="100%"
                size="sm"
                color="text"
                justifyContent="flex-start"
              >
                {value}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Combobox };
