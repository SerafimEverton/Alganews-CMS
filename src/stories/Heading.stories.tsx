import type { Meta, StoryObj } from "@storybook/react";

import Heading, { HeadingProps } from "../app/components/Typography/Heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'Heading 1'
  },
};
export const Heading2: Story = {
  args: {
    level: 1,
    children: 'Heading 2'
  },
};
export const Heading3: Story = {
  args: {
    level: 1,
    children: 'Heading 3'
  },
};