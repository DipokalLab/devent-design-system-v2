import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../lib";
import { useToast } from "../lib";
import { ToastContainer } from "../lib";
import { Flex } from "../lib";

export function Demo() {
  const toast = useToast();

  return (
    <Flex>
      <Button onClick={() => toast.message({ text: "dsdvsd" })}>
        토스트 열기
      </Button>
      <ToastContainer></ToastContainer>
    </Flex>
  );
}

const meta = {
  title: "Hooks/useToast",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
