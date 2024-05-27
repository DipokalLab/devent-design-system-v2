/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../lib/components/Button";
import "../lib/index.css";
import { ThemeProvider } from "../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export function Demo() {
  return (
    <Button onClick={() => console.log("SD")} color="blue">sf</Button>
  );
}

export const PrefixSubfix: Story = {
  args: {
    children: "Button",
    prefixComponent: (
      <span
        css={css({
          fontSize: "1rem !important",
        })}
        className="material-symbols-outlined"
      >
        arrow_circle_right
      </span>
    ),
    subfixComponent: (
      <span
        css={css({
          fontSize: "1rem !important",
        })}
        className="material-symbols-outlined"
      >
        add_box
      </span>
    ),
  },
};
