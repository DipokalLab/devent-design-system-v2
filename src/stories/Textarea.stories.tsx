import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../components/Badge";
import { Checkbox } from "../components/Checkbox";
import { Box } from "../components/Box";
import { Table, TableItem, TableRow } from "../components/Table";
import { Flex } from "../components/Flex";
import { Textarea } from "../components/Input";
import { useState } from "react";

export function Demo() {
  const [value, setValue] = useState("");
  return (
    <Flex width="200px">
      <Textarea
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        rows={3}
      ></Textarea>
    </Flex>
  );
}

export function Autosize() {
  const [value, setValue] = useState("");
  return (
    <Flex width="200px">
      <Textarea
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        rows={3}
        autosize={true}
      ></Textarea>
    </Flex>
  );
}

const meta = {
  title: "Components/Textarea",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;
