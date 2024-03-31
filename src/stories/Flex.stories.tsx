import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { Dialog } from "../components/Dialog";
import { Flex } from "../components/Flex";

export function Demo() {
  return (
    <Flex justifyContent="center">
      <div>s</div>
    </Flex>
  );
}

const meta = {
  title: "Components/Flex",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
