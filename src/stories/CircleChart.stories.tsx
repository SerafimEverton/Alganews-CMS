import type { Meta, StoryObj } from "@storybook/react";

import CircleChart from "../components/CircleChart/CircleChart";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CircleChart> = {
  title: "Example/CircleChart",
  component: CircleChart,
  argTypes: {
    progress:{
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
    // onCircleChart: { action: 'CircleChart' },
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
type Story = StoryObj<typeof CircleChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    progress: 80,
    size: 150   
  },
};