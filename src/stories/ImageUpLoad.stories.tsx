import type { Meta, StoryObj } from "@storybook/react";

import ImageUpload from "../components/ImageUpLoad/ImageUpLoad"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ImageUpload> = {
  title: "Example/ImageUpload",
  component: ImageUpload,
  argTypes: {
    // onImageUpload: { action: 'ImageUpload' },
    // onCancel: { action: 'cancel' },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    label: "Thumbmail do Post?"
  },
};