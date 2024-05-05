import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../lib/components/Badge";
import { Checkbox } from "../lib/components/Checkbox";
import { ThemeProvider } from "../lib";
import React from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Checkbox",
    checked: true,
  },
};
