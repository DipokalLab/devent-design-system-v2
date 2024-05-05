import React from "react";

import { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/lib";

// Replace your-framework with the framework you are using (e.g., react, vue3)

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
