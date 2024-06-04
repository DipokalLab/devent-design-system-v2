/** @jsxImportSource @emotion/react */

import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";

import { css } from "@emotion/react";
import { useColorMode } from "../hooks/useColorMode";
import { colorPalette } from "../styles/colors";

type NavbarType = {
  isDynamicWidth?: boolean;
  children?: any;
  isLogo?: boolean;
  title?: any;
  size?: "md" | "lg";
};

interface NavbarItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: any;
}

function NavbarItem(props: NavbarItemProps) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      css={css({
        border: "none",
        padding: "0.6rem 0.6rem",
        backgroundColor: "transparent",
        fontFamily: "'Noto Sans KR', sans-serif",
        fontSize: "0.9rem",
        color: colorPalette[colorMode].gray950,

        cursor: "pointer",
      })}
      {...props}
    >
      {props.children}
    </button>
  );
}

function NavbarLogo({ children, onClick }: any) {
  const [colorMode, setColorMode] = useColorMode();

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
        cursor: "pointer",
        fontWeight: "700",
        color: colorPalette[colorMode].gray950,
      })}
    >
      {children}
    </button>
  );
}

function Navbar({
  children,
  title = "",
  isDynamicWidth = true,
  size = "md",
}: NavbarType) {
  const [colorMode, setColorMode] = useColorMode();

  const [showBorder, setShowBorder] = useState(false);

  const paddingSize = {
    md: {
      padding: "0.4rem 1.125rem 0.25rem 1.125rem",
      title: {
        fontSize: "1rem",
      },
    },
    lg: {
      padding: "0.625rem 1.125rem 0.5rem 1.125rem",
      title: {
        fontSize: "1.125rem",
      },
    },
  };

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
        borderBottom: showBorder
          ? `0.1rem solid ${colorPalette[colorMode].gray050}`
          : "",
        backgroundColor: `${colorPalette[colorMode].white}95`,
        zIndex: "1000",
        backdropFilter: "blur(26px)",
      })}
    >
      <div
        css={css({
          display: "flex",
          justifyContent: "space-between",
          padding: paddingSize[size].padding,
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
            fontSize: paddingSize[size].title.fontSize,
            color: colorPalette[colorMode].gray950,
            fontFamily: "'Noto Sans KR', sans-serif",
            cursor: "pointer",
            fontWeight: "700",
          })}
        >
          {title}
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export { Navbar, NavbarItem, NavbarLogo };
