import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "../components/ProgressBar/ProgressBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProgressBar> = {
    title: "Example/ProgressBar",
    component: ProgressBar,
    argTypes: {
        // onProgressBar: { action: 'ProgressBar' },
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
type Story = StoryObj<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
    args: {
        title: "Você tem certeza?"
    },
};

export const Primary: Story = {
    args: {
        title: 'Você tem certeza?',
        progress: 50,
        theme: 'primary',
        width: 375
    },
}

export const Secondary: Story = {
    args: {
        title: 'Você tem certeza?',
        progress: 50,
        theme: 'secondary',
        width: 375
    },
}

export const Complete: Story = {
    args: {
        title: 'Você tem certeza?',
        progress: 100,
        theme: 'primary',
        width: 375
    },
}

export const ZeroProgress: Story = {
    args: {
        title: 'Você tem certeza?',
        progress: 0,
        theme: 'secondary',
        width: 375
    },
}

export const ProgressInHalfOfText: Story = {
    args: {
        title: 'Você tem certeza?',
        progress: 0,
        theme: 'secondary',
        width: 375
    },
}