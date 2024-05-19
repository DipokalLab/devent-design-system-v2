import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Flex, ThemeProvider } from "../lib";
import { Switch, SwitchItem } from "../lib";

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

export function Multiple() {
  return (
    <Flex>
      <Switch>
        <SwitchItem selected={true} value="1">
          Option
        </SwitchItem>
        <SwitchItem value="2">Pick1</SwitchItem>
        <SwitchItem value="3">Pick2</SwitchItem>

        <SwitchItem value="4">Pick3</SwitchItem>

      </Switch>
    </Flex>
  );
}

const meta = {
  title: "Components/Switch",
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
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;
