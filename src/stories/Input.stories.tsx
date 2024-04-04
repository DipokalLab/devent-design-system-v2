import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../lib";

const meta = {
  title: "Components/Input",
  component: Input,
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
