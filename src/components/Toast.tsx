/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css, keyframes } from "@emotion/react";
import { createPortal, render } from "react-dom";
import { createRoot } from "react-dom/client";

const fadeIn = keyframes`
    0% {
        transform: translateY(10px);
    opacity: 0%;

    }
    100% {
        transform: translateY(0px);
        opacity: 100%;

    }
`;

const fadeOut = keyframes`
    0% {
    opacity: 100%;

    }
    100% {
        opacity: 0%;

    }
`;

function ToastContainer({ children }: { children?: any }) {
  return (
    <div
      id="toast"
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "50%",
        marginTop: "4rem",

        transform: "translateX(-50%)",
        zIndex: 3000,
      })}
    >
      {children}
    </div>
  );
}

function Toast({ children }: { children?: any }) {
  const [fadeAnimation, setFadeAnimation] = useState(`${fadeIn} 0.3s forwards`);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFadeAnimation(`${fadeOut} 0.3s forwards`);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }, 3000);
  }, []);
  return (
    <div
      css={css({
        display: isOpen ? "" : "none",
        padding: "0.7rem 1.6rem",
        marginTop: "0.6rem",
        borderRadius: "0.8rem",
        border: "0.1rem solid #F0F0F4",
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 7px 20px #93949e20",
        animation: fadeAnimation,
      })}
    >
      {children}
    </div>
  );
}

export { Toast };
