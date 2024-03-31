/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { Button } from "./Button";

function Dropdown({ children, title }: { children?: any; title?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        onClick={handleClick}
        css={css({
          display: !isOpen ? "none" : "",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(10px)",
          zIndex: "1000",
        })}
      ></div>
      <div
        css={css({
          position: "relative",
          zIndex: "2000",
        })}
      >
        <Button onClick={handleClick}>{title}</Button>
        <div
          css={css({
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: "3rem",
            width: "6rem",
            padding: "0.3rem",
            gap: "0.3rem",
            borderRadius: "0.8rem",
            border: "0.1rem solid #F0F0F4",
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: "0.9rem",
            backgroundColor: "#ffffff",
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
}

function DropdownItem({ children }: { children?: any }) {
  return <div>{children}</div>;
}

export { Dropdown, DropdownItem };
