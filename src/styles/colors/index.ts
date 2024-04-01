import { lightColorPalette } from "./light";
import { darkColorPalette } from "./dark";
import { getCookies, setCookie } from "../../utils/cookie";

let colorPalette = lightColorPalette;

const initCookieForColorTheme = () => {
  const cookies: any = getCookies();
  if (!cookies.hasOwnProperty("theme")) {
    setCookie("theme", "light");
  } else {
    colorPalette =
      cookies.theme == "dark" ? darkColorPalette : lightColorPalette;
  }
};
initCookieForColorTheme();

export { colorPalette };
