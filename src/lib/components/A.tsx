import React, { useEffect, useState } from "react";
import { colorPalette } from "../styles/colors";
import { useColorMode } from "../hooks/useColorMode";
import styled from "@emotion/styled";

function A({ children, href = "#" }: { children?: any; href?: string }) {
  const [colorMode, setColorMode] = useColorMode();

  const AElement = styled.a({
    transition: "0.3s",
    color: colorPalette[colorMode].black,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
      textDecorationColor: colorPalette.black,
    },
  });

  return <AElement href={href}>{children}</AElement>;
}

export { A };
