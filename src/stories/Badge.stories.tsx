import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../lib/components/Badge";
import { ThemeProvider } from "../lib";
import React from "react";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Badge",
  },
};
