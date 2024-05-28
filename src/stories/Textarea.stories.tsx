import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Box, ThemeProvider } from "../lib";
import { Flex } from "../lib";
import { Textarea } from "../lib";
import { useState } from "react";
import React from "react";

export function Demo() {
  const [value, setValue] = useState("dsv");
  return (
    <Flex width="200px">
      <Textarea
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        rows={3}
      ></Textarea>
    </Flex>
  );
}

export function Autosize() {
  const [value, setValue] = useState("");
  return (
    <Flex width="200px">
      <Textarea
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        rows={3}
        autosize={true}
      ></Textarea>
    </Flex>
  );
}

const meta = {
  title: "Components/Textarea",
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
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;
