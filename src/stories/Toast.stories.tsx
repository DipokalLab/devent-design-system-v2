import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useToast } from "../hooks/useToast";
import { ToastContainer } from "../components/Toast";

export function Demo() {
  const toast = useToast();

  return (
    <div>
      <Button onClick={() => toast.message({ text: "dsdvsd" })}>
        토스트 열기
      </Button>
      <ToastContainer></ToastContainer>
    </div>
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
