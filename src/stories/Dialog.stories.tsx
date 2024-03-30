import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { Dialog } from "../components/Dialog";

function Demo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Dialog 열기</Button>
      <Dialog
        isOpen={isOpen}
        onConfirm={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      >
        <p>이건 Dialog 테스트 입니다. 만나서 반갑습니다.</p>
      </Dialog>
    </div>
  );
}

const meta = {
  title: "Components/Dialog",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClose: fn() },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: `<Button>dd</Button>`,
  },
};
