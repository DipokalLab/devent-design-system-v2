/** @jsxImportSource @emotion/react */

import { createContext, useContext, useEffect, useState } from "react";
import { getCookies, setCookie } from "../utils/cookie";
import { Global, css } from "@emotion/react";

const ThemeContext = createContext(undefined);

const getColorMode = (): "light" | "dark" => {
  const cookies: any = getCookies();
  if (!cookies.hasOwnProperty("theme")) {
    setCookie("theme", "light");
  }
  return cookies.theme;
};

function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<any>(getColorMode());

  const updateColorTheme = (color: string) => {
    console.log(color);
    setCookie("theme", color);
    setTheme(color);
  };

  const values: any = { theme, updateColorTheme };

  return (
    <ThemeContext.Provider value={values}>
      <>
        <Global
          styles={css`
            body {
              background-color: ${theme == "light" ? "#ffffff" : "#000000"};
              color: ${theme == "light" ? "#000000" : "#ffffff"};
            }

            #toastContainer > div > div {
              background-color: ${theme == "light" ? "#ffffff" : "#000000"};
              border: ${theme == "light"
                ? "0.1rem solid #F0F0F4"
                : "0.1rem solid #24262b"};
            }
          `}
        />
        {children}
      </>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };

export default ThemeContext;
