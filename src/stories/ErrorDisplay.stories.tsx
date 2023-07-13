import type { Meta, StoryObj } from "@storybook/react";

import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ErrorDisplay> = {
    title: "Example/ErrorDisplay",
    component: ErrorDisplay,
    argTypes: {
        // onErrorDisplay: { action: 'ErrorDisplay' },
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
type Story = StoryObj<typeof ErrorDisplay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
    args: {

    },
};
export const CustomTitle: Story = {
    args: {
        title: 'Houve um erro'
    },
};
export const CustomMessage: Story = {
    args: {
        title: 'Houve um erro',
        message: 'Falha na comunicação com o servidor'
    },
};
export const Small: Story = {
    args: {
        title: 'Houve um erro',
        message: 'Falha na comunicação com o servidor',
        small: true
    },
};
