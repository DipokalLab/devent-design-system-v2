import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useToast } from "../hooks/useToast";
import { ToastContainer } from "../components/Toast";
import { Flex } from "../components/Flex";
import { Radio, RadioItem } from "../components/Radio";

export function Demo() {
  return (
    <Flex>
      <Radio>
        <RadioItem value={"sdvs"}>Radio</RadioItem>
        <RadioItem value={"dsvfsdef"}>라디온데</RadioItem>
      </Radio>
    </Flex>
  );
}

export function getValue() {
  const [value, setValue] = useState("");
  return (
    <Flex>
      {value}
      <Radio onChange={(e: any) => setValue(e.target.value)}>
        <RadioItem value={"sdvs"}>Radio</RadioItem>
        <RadioItem value={"dsvfsdef"}>라디온데</RadioItem>
      </Radio>
    </Flex>
  );
}

const meta = {
  title: "Components/Radio",
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
