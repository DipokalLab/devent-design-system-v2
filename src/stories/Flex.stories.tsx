import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../lib/components/Input";
import { Modal } from "../lib/components/Modal";
import { Button } from "../lib/components/Button";
import { Dialog } from "../lib/components/Dialog";
import { Flex } from "../lib/components/Flex";
import { ThemeProvider } from "../lib";

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
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
