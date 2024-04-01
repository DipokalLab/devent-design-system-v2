/** @jsxImportSource @emotion/react */

import React, { createElement, useEffect, useState } from "react";

import { css } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { Toast } from "../components/Toast";

function useToast() {
  const message = ({ text }: { text: string }) => {
    if (document.getElementById("toastContainer")) {
      const root = document.getElementById("toastContainer") as HTMLElement;
      const appendDiv = document.createElement("div");
      const id = "toastComponents" + String(Math.random());
      appendDiv.id = id;
      root.append(appendDiv);

      const dom = ReactDOM.createRoot(
        document.getElementById(id) as HTMLElement as HTMLElement
      );
      dom.render(<Toast>{text}</Toast>);

      return 0;
    }

    const appendDiv = document.createElement("div");
    appendDiv.id = "toastContainer";
    appendDiv.style.display = "flex";
    appendDiv.style.flexDirection = "column";
    appendDiv.style.justifyContent = "flex";
    appendDiv.style.alignItems = "center";
    appendDiv.style.position = "fixed";
    appendDiv.style.bottom = "2rem";
    appendDiv.style.right = "2rem";
    appendDiv.style.zIndex = "3000";

    const root = document.getElementById("root") as HTMLElement;
    root.append(appendDiv);

    const dom = ReactDOM.createRoot(
      document.getElementById("toastContainer") as HTMLElement
    );
    dom.render(<Toast>{text}</Toast>);

    return 0;
  };

  return { message: message };
}

export { useToast };
