import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, Navbar, NavbarItem, ThemeProvider } from "../lib";
import { useToast } from "../lib";
import { ToastContainer } from "../lib";
import { Flex } from "../lib";

export function Demo() {
  const toast = useToast();

  return (
    <Flex>
      <Navbar title="TEST PAGE" size="lg">
        <NavbarItem>sdf</NavbarItem>
      </Navbar>

      <div
        style={{
          height: "100vh",
          width: "100%",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>gsedgaweg</p>
      </div>
    </Flex>
  );
}

const meta = {
  title: "Example/Page",
  component: Demo,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Demo>;

export default meta;
