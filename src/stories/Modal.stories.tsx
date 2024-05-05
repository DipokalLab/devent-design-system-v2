import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, ThemeProvider } from "../lib";
import { Modal } from "../lib";
import { Button } from "../lib";

export function Demo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>환영합니다</h2>
        <p>이건 모달 테스트 입니다. 만나서 반갑습니다.</p>
        <div>
          <Button
            color="black"
            width="100%"
            type="fill"
            display="flex"
            onClick={() => setIsOpen(false)}
          >
            모달 닫기
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export function Scroll() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isScroll={true}>
        <h2>환영합니다</h2>
        <p>이건 모달 테스트 입니다. 만나서 반갑습니다.</p>
        <p>{"aaaaaaaaaaaaaa".repeat(100)}</p>
      </Modal>
    </div>
  );
}

const meta = {
  title: "Components/Modal",
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
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
