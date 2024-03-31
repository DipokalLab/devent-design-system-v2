import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "../components/Badge";
import { Checkbox } from "../components/Checkbox";
import { Box } from "../components/Box";
import { Table, TableItem, TableRow } from "../components/Table";
import { Flex } from "../components/Flex";

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
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;