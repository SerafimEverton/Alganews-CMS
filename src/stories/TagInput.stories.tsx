import type { Meta, StoryObj } from "@storybook/react";

import TagInput from "../components/TagInput/TagInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TagInput> = {
  title: "Example/TagInput",
  component: TagInput,
  argTypes: {
    // onTagInput: { action: 'TagInput' },
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
type Story = StoryObj<typeof TagInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {

    placehoder: 'Insira as Tags deste Post',
    tags: [{ id: '1', text: 'JavaScript'}]
   
  },
};
export const VariousTags: Story = {
  args: {

    placehoder: 'Insira as Tags deste Post',
    tags: [
        { id: '1', text: 'JavaScript'},
        { id: '2', text: 'Java'},
        { id: '3', text: 'Ruby'},
        { id: '4', text: 'Swit'},
        { id: '5', text: 'C++'},
        { id: '6', text: 'C#'},
        { id: '7', text: 'CSS'},
        { id: '8', text: 'Pyton'},
        { id: '9', text: 'Node.JS'},
        { id: '10', text: 'HTML5'},
    ]
   
  },
};