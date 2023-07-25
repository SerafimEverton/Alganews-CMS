import type { Meta, StoryObj } from "@storybook/react";

import NoData from "../app/components/NoData/NoData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NoData> = {
  title: "Example/NoData",
  component: NoData,
  argTypes: {
//     onNoData: { action: 'NoData' },
//     onCancel: { action: 'cancel' },
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
type Story = StoryObj<typeof NoData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    
  },
};

export const FixedHeight: Story = {
  args: {
    height:240
  },
};