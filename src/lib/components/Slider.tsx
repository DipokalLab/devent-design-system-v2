/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";

function Slider({ min = 0, max = 100, value, onChange }: { min?: number; max?: number; value?: number; onChange?: any }) {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <input type="range" min={min} max={max} value={value} onChange={onChange} css={css({
            width: "100%",
            height: "0.4rem",
            transition: "0.3s",
            backgroundColor: colorPalette[colorMode].gray050,
            borderRadius: "0.4rem",
            outline: "none",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: "pointer",
            "::-webkit-slider-thumb": {
                appearance: "none",
                WebkitAppearance: "none",
                height: "0.6rem",
                width: "0.6rem",
                borderRadius: "10rem",
                background: colorPalette[colorMode].black,
            },
            "::-moz-range-thumb": {
                height: "0.6rem",
                width: "0.6rem",
                background: colorPalette[colorMode].black,
            }
        })} />
    );
}

export { Slider };
