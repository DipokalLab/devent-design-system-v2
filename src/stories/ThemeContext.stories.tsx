import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, ThemeProvider, useColorMode } from "../lib";
import { Toggle } from "../lib";
import { useState } from "react";
import React from "react";

export function Root() {
  return <ThemeProvider></ThemeProvider>;
}

const meta = {
  title: "useContext/ThemeProvider",
  component: Root,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
