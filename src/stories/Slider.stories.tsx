import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Skeleton, Slider, ThemeProvider } from "../lib";
import { Flex } from "../lib";
import React, { useState } from "react";

export function Demo() {
    const [value, setValue] = useState(0)
    return (
        <Flex width="100px">
            {value}
            <Slider value={value} onChange={(e) => setValue(e.target.value)}></Slider>
        </Flex>
    );
}

const meta = {
    title: "Components/Slider",
    component: Slider,
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;
