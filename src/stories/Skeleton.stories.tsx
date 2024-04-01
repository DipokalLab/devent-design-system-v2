import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Skeleton } from "../lib";
import { Flex } from "../lib";
import React from "react";

export function Demo() {
  return (
    <Flex width="100px">
      <Skeleton></Skeleton>
    </Flex>
  );
}

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;
