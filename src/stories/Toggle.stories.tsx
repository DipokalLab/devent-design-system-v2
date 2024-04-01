import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../lib";
import { Toggle } from "../lib";
import { useState } from "react";
import React from "react";

export function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Toggle checked={isOpen} onClick={() => setIsOpen(!isOpen)}>
      토글
    </Toggle>
  );
}

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
