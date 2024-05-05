/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import { colorPalette } from "../styles/colors";
import { Box } from "./Box";

function Popover({
  children,
  message = "",
}: {
  children?: any;
  message?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [childrenWidth, setChildrenWidth] = useState(0);
  const childrenRef: any = useRef();

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const width = childrenRef.current.clientWidth;
    setChildrenWidth(width);
  }, []);
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      ref={childrenRef}
      css={css({
        display: "inline",
        position: "relative",
        cursor: "pointer",
      })}
    >
      {children}
      <div
        css={css({
          width: "max-content",
          display: isOpen ? "" : "none",
          position: "absolute",
          top: "-50px",
          transform: "translate(-50%,0)",
          left: `${childrenWidth / 2}px`,
        })}
      >
        <Box size="sm">{message}</Box>
      </div>
    </div>
  );
}

export { Popover };
