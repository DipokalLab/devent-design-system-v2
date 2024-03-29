/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type NavbarType = {
  isDynamicWidth?: boolean;
  children?: any;
};

function NavbarItem({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      css={css({
        border: "none",
        padding: "0.6rem 0.6rem",
        backgroundColor: "transparent",
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.8rem",
        color: "#2d2d30",
        cursor: "pointer",
      })}
    >
      {children}
    </button>
  );
}

function NavbarLogo({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      css={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        padding: "0.6rem 0.6rem",
        backgroundColor: "transparent",
        fontFamily: "'Noto Sans KR', sans-serif",

        color: "#edeef2",
        cursor: "pointer",
      })}
    >
      {children}
    </button>
  );
}

function Navbar({ children, isDynamicWidth = true }: NavbarType) {
  const [showBorder, setShowBorder] = useState(false);

  const handleScroll = (e: any) => {
    if (window.scrollY < 20) {
      setShowBorder(false);
    } else {
      setShowBorder(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      css={css({
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        borderBottom: showBorder ? "0.1rem solid #F0F0F4" : "",
        backgroundColor: "#ffffff95",
        zIndex: "1000",
        backdropFilter: "blur(26px)",
      })}
    >
      <div
        css={css({
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4rem 1rem 0.25rem 1rem",
          width: "100%",
          "@media(min-width: 1200px)": {
            maxWidth: isDynamicWidth ? "1200px" : "100%",
          },
        })}
      >
        <div
          css={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <NavbarLogo>
            <span
              className="material-symbols-outlined"
              css={css({ fontSize: "1.4rem", color: "#2d2d30" })}
            >
              home
            </span>
          </NavbarLogo>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export { Navbar, NavbarItem };
