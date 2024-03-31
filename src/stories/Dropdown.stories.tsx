import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { Dropdown, DropdownItem } from "../components/Dropdown";

export function Demo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dropdown title="test">
        <DropdownItem>
          <Button
            display="flex"
            width="100%"
            size="sm"
            color="text"
            justifyContent="flex-start"
          >
            수정
          </Button>
        </DropdownItem>
        <DropdownItem>
          <Button
            display="flex"
            width="100%"
            size="sm"
            color="text"
            justifyContent="flex-start"
          >
            공유하기
          </Button>
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

const meta = {
  title: "Components/Dropdown",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
