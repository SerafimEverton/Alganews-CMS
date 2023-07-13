import type { Meta, StoryObj } from "@storybook/react";

import SessionController from "../components/SessionController/SessionController";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SessionController> = {
    title: "Example/SessionController",
    component: SessionController,
    argTypes: {
        // onSessionController: { action: 'SessionController' },
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
type Story = StoryObj<typeof SessionController>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
    args: {
        name: 'Daniel Bonfacio',
        description: 'Editor há muito tempo'
    },
};