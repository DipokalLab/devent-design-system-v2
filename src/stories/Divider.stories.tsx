import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../lib/components/Badge";
import { Flex, Progressbar } from "../lib";

import React, { useEffect, useState } from "react";
import { Divider } from "../lib/components/Divider";

export function DividerDemo() {
  return (
    <Flex width="300px">
      <p>divider</p>
      <Divider />
      <p>기준선 입니다</p>
    </Flex>
  );
}

const meta = {
  title: "Components/Divider",
  component: DividerDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;
