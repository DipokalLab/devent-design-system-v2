import type { Meta, StoryObj } from "@storybook/react";

import { Box, ThemeProvider } from "../lib";
import { Table, TableItem, TableRow } from "../lib";
import { Flex } from "../lib";
import React from "react";

export function Demo() {
  return (
    <Flex width="500px">
      <Table>
        <TableRow isHead={true}>
          <TableItem>#1</TableItem>
          <TableItem>#2</TableItem>
          <TableItem>#3</TableItem>
        </TableRow>

        <TableRow>
          <TableItem>sdvfsd</TableItem>
          <TableItem>sdvsd</TableItem>
          <TableItem>sdgveg</TableItem>
        </TableRow>

        <TableRow>
          <TableItem>sdvfsd</TableItem>
          <TableItem>sdvsd</TableItem>
          <TableItem>sdgveg</TableItem>
        </TableRow>
      </Table>
    </Flex>
  );
}

const meta = {
  title: "Components/Table",
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
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;
