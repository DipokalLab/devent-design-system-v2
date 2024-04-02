/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { colorPalette } from "../styles/colors";

function Divider() {
  return (
    <hr
      css={css({
        border: `1px solid ${colorPalette.gray050}`,
      })}
    ></hr>
  );
}

export { Divider };
