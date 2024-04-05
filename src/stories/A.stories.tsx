import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { A } from "../lib/components/A";

const meta = {
  title: "Components/A",
  component: A,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "https://devent.kr",
    children: "이건 a 태근데요",
  },
};
