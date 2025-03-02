import { Meta, StoryFn } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
    title: 'Components/Title',
    component: Title,
    argTypes: {
        children: { control: 'text' },
        highlight: { control: 'text' },
        subtitle: { control: 'text' },
        align: { control: { type: 'select', options: ['left', 'center', 'right'] } },
        size: { control: { type: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] } },
        weight: { control: { type: 'select', options: ['normal', 'medium', 'semibold', 'bold'] } },
        color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'default'] } },
        className: { control: 'text' },
        as: {
            control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
        },
    },
};

export default meta;

type Story = StoryFn<typeof Title>;

// Primary Story with the rendering implementation
export const Primary: Story = (args) => <Title {...args} />;

Primary.args = {
    children: 'This is a Primary Title',
    highlight: 'Primary',
    subtitle: 'This is a subtitle for the primary title',
    align: "left",
    size: "xl",
    weight: "bold",
    color: "primary",
    className: "",
    as: "h1",
};

// Secondary Story with the rendering implementation
export const Secondary: Story = (args) => <Title {...args} />;

Secondary.args = {
    children: 'Secondary Title Example',
    highlight: 'Secondary',
    subtitle: 'A subtitle to support the secondary title.',
    color: 'secondary',
    align: "left",
    size: "xl",
    weight: "bold",
    className: "",
    as: "h1",
};

// Accent Story with the rendering implementation
export const Accent: Story = (args) => <Title {...args} />;
Accent.args = {
    children: 'Accent Title Here',
    highlight: 'Accent',
    subtitle: 'More details about accent.',
    color: 'accent',
    align: "left",
    size: "xl",
    weight: "bold",
    className: "",
    as: "h1",
};

// Default Story with the rendering implementation
export const Default: Story = (args) => <Title {...args} />;
Default.args = {
    children: 'Default Title Style',
    highlight: 'Title',
    subtitle: 'Subtitle for the default style.',
    color: 'default',
    align: "left",
    size: "xl",
    weight: "bold",
    className: "",
    as: "h1",
};

// Custom Size and Weight Story with the rendering implementation
export const CustomSizeAndWeight: Story = (args) => <Title {...args} />;
CustomSizeAndWeight.args = {
    children: 'Custom Sized Title',
    highlight: 'Sized',
    subtitle: 'Showing off custom sizes.',
    size: '3xl',
    weight: 'normal',
    color: "primary",
    align: "left",
    className: "",
    as: "h1",
};

// Centered Title Story with the rendering implementation
export const CenteredTitle: Story = (args) => <Title {...args} />;
CenteredTitle.args = {
    children: 'Centered Title',
    highlight: 'Centered',
    subtitle: 'This title is aligned to the center.',
    align: 'center',
    size: "xl",
    weight: "bold",
    color: "primary",
    className: "",
    as: "h1",
};

// Multiple Highlights Story with the rendering implementation
export const MultipleHighlights: Story = (args) => <Title {...args} />;
MultipleHighlights.args = {
    children: 'Multiple Highlights Title',
    highlight: ['Multiple', 'Highlights'],
    subtitle: 'Shows multiple highlighted words.',
    align: "left",
    size: "xl",
    weight: "bold",
    color: "primary",
    className: "",
    as: "h1",
};

// As H2 Story with the rendering implementation
export const AsH2: Story = (args) => <Title {...args} />;
AsH2.args = {
    children: 'Title rendered as H2',
    highlight: 'H2',
    subtitle: 'Demonstrates the "as" prop.',
    as: 'h2',
    align: "left",
    size: "xl",
    weight: "bold",
    color: "primary",
    className: "",
};

// With ClassName Story with the rendering implementation
export const WithClassName: Story = (args) => <Title {...args} />;
WithClassName.args = {
    children: 'Title with custom class',
    highlight: 'class',
    subtitle: 'Custom styling example',
    className: 'custom-title-class',
    align: "left",
    size: "xl",
    weight: "bold",
    color: "primary",
    as: "h1",
};