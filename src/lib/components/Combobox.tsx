/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import { DropdownItem } from "./Dropdown";
import { Button } from "./Button";

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


function Combobox({
    type = "text",
    value,
    placeholder,
    onChange,
    onEnter,
    name,
}: InputType) {
    const [colorMode, setColorMode] = useColorMode();
    const [isClick, setIsClick] = useState(false)

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

    const handleClick = () => {
        setIsClick(true)
    }

    const handleDocumentClick = () => {
        setIsClick(false)
    }


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
                })}
            >
                <input
                    onClick={handleClick}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
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
                        width: "100%",
                        padding: "0.3rem",
                        gap: "0.3rem",
                        borderRadius: "0.8rem",
                        border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
                        fontFamily: "'Noto Sans KR', sans-serif",
                        fontSize: "0.9rem",
                        backgroundColor: colorPalette[colorMode].white,
                        boxShadow: "0 7px 20px #93949e20",
                    })}
                >
                    <DropdownItem>
                        <Button
                            display="flex"
                            width="100%"
                            size="sm"
                            color="text"
                            justifyContent="flex-start"
                        >
                            수정
                        </Button>
                    </DropdownItem>
                </div>

            </div>
        </>

    );
}

export { Combobox }