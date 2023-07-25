import type { Meta, StoryObj } from "@storybook/react";

import ValueDescriptior, { ValueDescriptorProps } from "../app/components/ValueDescriptor/ValueDescriptor";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ValueDescriptior> = {
  title: "Example/ValueDescriptior",
  component: ValueDescriptior,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  //**************************************************************************//
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof ValueDescriptior>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02
  },
};
export const Primary: Story = {
  args: {
    description: 'Ganhos na semana',
    isCurrency: false,
    value: 560322.02
  },
};
export const DefaultCurrency: Story = {
  args: {
    description: 'Ganhos na semana',
    isCurrency: true,
    value: 560322.02
  },
};
export const PrimaryCurrency: Story = {
  args: {
    description: 'Ganhos na semana',
    isCurrency: true,
    value: 560322.02
  },
};