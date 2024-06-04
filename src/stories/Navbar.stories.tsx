import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, NavbarItem, NavbarLogo, ThemeProvider } from "../lib";
import { Navbar } from "../lib";
import React from "react";

export const DemoIcon = () => {
  return (
    <div>
      <Navbar
        title={
          <NavbarLogo>
            <span
              className="material-symbols-outlined"
              style={{
                color: "#000000",
              }}
            >
              home
            </span>
          </NavbarLogo>
        }
      ></Navbar>
    </div>
  );
};

export const DemoTitle = () => {
  return (
    <div>
      <Navbar
        title={
          <span
            style={{
              paddingLeft: "0.5rem",
            }}
          >
            TITLE
          </span>
        }
      >
        <NavbarItem onClick={() => console.log(":DD")}>dv</NavbarItem>
      </Navbar>
    </div>
  );
};

const meta = {
  title: "Components/Navbar",
  component: Navbar,
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
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
