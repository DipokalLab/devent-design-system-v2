import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, Navbar, NavbarItem, ThemeProvider } from "../../lib";
import { useToast } from "../../lib";
import { ToastContainer } from "../../lib";
import { Flex } from "../../lib";
import { Global } from "@emotion/react";

export function Demo() {
  const toast = useToast();

  return (
    <div
      style={{
        margin: 0,
      }}
    >
      <Navbar title="TEST PAGE" size="lg">
        <NavbarItem>가입</NavbarItem>
      </Navbar>

      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          TEST PAGE v1
        </p>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "2.125rem",
              fontWeight: "700",
              marginTop: "2rem",
            }}
          >
            TEST PAGE v1
          </p>
        </div>
      </div>
    </div>
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
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Demo>;

export default meta;
