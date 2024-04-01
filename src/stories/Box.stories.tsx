import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../lib/components/Badge";
import { Checkbox } from "../lib/components/Checkbox";
import { Box } from "../lib/components/Box";

const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Checkbox",
  },
};
