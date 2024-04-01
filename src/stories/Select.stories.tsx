import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, Select } from "../lib";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "값을 선택하세요",
  },
};
