/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";
import styled from "@emotion/styled";

function Dropdown({ children, title }: { children?: any; title?: string }) {
  const [colorMode, setColorMode] = useColorMode();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const ClickBackground = styled.div({
    display: !isOpen ? "none" : "",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "1000",
  });

  const RelativePosition = styled.div({
    position: "relative",
    zIndex: "2000",
  });

  const DropdownBody = styled.div({
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "3rem",
    width: "6rem",
    padding: "0.3rem",
    gap: "0.3rem",
    borderRadius: "0.8rem",
    border: `0.1rem solid ${colorPalette[colorMode].gray050}`,
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "0.9rem",
    backgroundColor: colorPalette[colorMode].white,
    boxShadow: "0 7px 20px #93949e20",
  });

  return (
    <>
      <ClickBackground onClick={handleClick} />
      <RelativePosition>
        <Button onClick={handleClick}>{title}</Button>
        <DropdownBody>{children}</DropdownBody>
      </RelativePosition>
    </>
  );
}

function DropdownItem({ children }: { children?: any }) {
  return <div>{children}</div>;
}

export { Dropdown, DropdownItem };
