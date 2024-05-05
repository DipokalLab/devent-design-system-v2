import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, ThemeProvider } from "../lib";
import { Navbar } from "../lib";
import React from "react";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
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
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
