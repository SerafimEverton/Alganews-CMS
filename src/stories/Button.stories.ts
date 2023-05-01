import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    label: "Button",
  },
};
