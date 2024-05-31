import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Combobox, Skeleton, ThemeProvider } from "../lib";
import { Flex } from "../lib";
import React, { useState } from "react";

export function Demo() {
  const [value, setValue] = useState("");
  return (
    <>
      <Combobox
        onChange={(e) => setValue(e.target.value)}
        value={value}
        list={["테스트", "이건 테스트"]}
      ></Combobox>
    </>
  );
}

export function DemoScroll() {
  const [value, setValue] = useState("");
  const list = Array.from(Array(10).keys());

  return (
    <>
      <Combobox
        onChange={(e) => setValue(e.target.value)}
        value={value}
        list={list}
      ></Combobox>
    </>
  );
}

const meta = {
  title: "Components/Combobox",
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;
