import type { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "../app/components/Input/input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'e.g.: Jon Doe'
  },
};

export const WithLabelAndWithPlaceholder: Story = {
  args: {
    label: "Name",
    placeholder: 'e.g.: Jon Doe'
  },
};

export const WithLabelAndContent: Story = {
  args: {
    label: "Name",
    value: 'Jon Doe'
  },
};

export const WithContent: Story = {
  args: {
    value: 'Jon Doe'
  },
};