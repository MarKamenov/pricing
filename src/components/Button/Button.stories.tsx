import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
        variant: { control: "radio", options: ["primary", "secondary"] },
        size: { control: "radio", options: ["small", "medium", "large"] },
        fullWidth: { control: "boolean" },
        disabled: { control: "boolean" },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary Button",
        variant: "primary",
        ariaLabel: "Primary button",
        onClick: () => console.log("Primary button clicked"),
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
        ariaLabel: "Secondary button",
        onClick: () => console.log("Secondary button clicked"),
    },
};

export const Disabled: Story = {
    args: {
        children: "Disabled Button",
        disabled: true,
        ariaLabel: "Disabled button",
        onClick: () => console.log("Disabled button clicked"),
    },
};

export const FullWidth: Story = {
    args: {
        children: "Full Width Button",
        fullWidth: true,
        ariaLabel: "Full width button",
        onClick: () => console.log("Full width button clicked"),
    },
};
