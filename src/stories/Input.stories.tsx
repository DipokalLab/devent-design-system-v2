import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Flex, Input, ThemeProvider } from "../lib";
import React from "react";

export function Prefix() {
  return (
    <Flex justifyContent="center">
      <Input prefix={<b>USERNAME</b>}></Input>
    </Flex>
  );
}

export function Subfix() {
  return (
    <Flex justifyContent="center">
      <Input subfix={<p style={{ margin: 0 }}>.com</p>}></Input>
    </Flex>
  );
}

export function PrefixSubfix() {
  return (
    <Flex justifyContent="center">
      <Input
        prefix={<b>https://</b>}
        subfix={<p style={{ margin: 0 }}>/hhj</p>}
      ></Input>
    </Flex>
  );
}

const meta = {
  title: "Components/Input",
  component: Input,
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
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "입력..",
  },
};

export const Vaild: Story = {
  args: {
    vaild: false,
    vaildMessage: "값이 들어가야 합니다..!",
  },
};

export const VaildTrue: Story = {
  args: {
    vaild: true,
    vaildMessage: "정답입니다",
  },
};
