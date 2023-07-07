import type { Meta, StoryObj } from "@storybook/react";

import FieldDescriptor, {
  FieldDescriptorProps,
} from "../components/FieldDescriptor/fieldDescriptor";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldDescriptor> = {
  title: "Example/FieldDescriptor",
  component: FieldDescriptor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof FieldDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Date: Story = {
  args: {
    field: "Data de nascimento",
    value: "26 de Dezembro de 1997 (22 anos)",
  },
};
