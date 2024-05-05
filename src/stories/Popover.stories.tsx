import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { A } from "../lib/components/A";
import { Popover } from "../lib/components/Popover";

import React from "react";
import { ThemeProvider } from "../lib";

export const Demo = () => {
  return (
    <div>
      test
      <Popover message="이건 팝오버 this is ">is</Popover> simple
    </div>
  );
};

const meta = {
  title: "Components/Popover",
  component: Demo,
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
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;
