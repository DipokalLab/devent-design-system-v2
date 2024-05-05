import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../lib/components/Badge";
import { Flex, Progressbar, ThemeProvider } from "../lib";

import React, { useEffect, useState } from "react";

export function Progress() {
  const [percent, setPercent] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => percent + 10);
    }, 1000);
  }, []);
  return (
    <Flex width="300px">
      <Progressbar percent={percent}></Progressbar>
    </Flex>
  );
}

const meta = {
  title: "Components/Progressbar",
  component: Progress,
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Badge",
  },
};
