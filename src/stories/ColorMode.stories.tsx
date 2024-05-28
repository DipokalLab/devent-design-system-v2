import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, ThemeProvider, useColorMode } from "../lib";
import { Toggle } from "../lib";
import { useState } from "react";
import React from "react";

function DarkmodeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Toggle
      checked={colorMode == "light" ? false : true}
      onClick={() => setColorMode(colorMode == "light" ? "dark" : "light")}
    >
      다크모드 on/off
    </Toggle>
  );
}

export function Darkmode() {
  return (
    <ThemeProvider>
      <DarkmodeToggle></DarkmodeToggle>
    </ThemeProvider>
  );
}

const meta = {
  title: "Hooks/useColorMode",
  component: Darkmode,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;
