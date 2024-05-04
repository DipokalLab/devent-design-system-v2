/** @jsxImportSource @emotion/react */

import { createContext, useContext, useEffect, useState } from "react";
import { getCookies, setCookie } from "../utils/cookie";
import { Global, css } from "@emotion/react";
import ThemeContext from "../context/ThemeProvider";

const getColorMode = (): "light" | "dark" => {
  const cookies: any = getCookies();
  if (!cookies.hasOwnProperty("theme")) {
    setCookie("theme", "light");
  }
  return cookies.theme;
};

function useColorMode(): [string, any] {
  const { theme, updateColorTheme }: any = useContext(ThemeContext);

  const [colorMode, setColorMode] = useState<"light" | "dark">(getColorMode());

  const setColor = (usertheme: "light" | "dark") => {
    setCookie("theme", usertheme);
    updateColorTheme(usertheme);
  };

  useEffect(() => {
    const mode = getColorMode();
    setColor(mode);
  }, []);

  useEffect(() => {
    setColor(theme);
    setColorMode(theme);
    updateColorTheme(theme);
  }, [theme]);

  return [colorMode, setColor];
}

export { useColorMode };
