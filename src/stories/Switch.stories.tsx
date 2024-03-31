import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useToast } from "../hooks/useToast";
import { ToastContainer } from "../components/Toast";
import { Flex } from "../components/Flex";
import { Switch, SwitchItem } from "../components/Switch";

export function Demo() {
  return (
    <Flex>
      <Switch>
        <SwitchItem selected={true} value="1">
          Option
        </SwitchItem>
        <SwitchItem value="2">Pick</SwitchItem>
      </Switch>
    </Flex>
  );
}

const meta = {
  title: "Components/Switch",
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
