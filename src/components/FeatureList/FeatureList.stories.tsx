import { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./FeatureList";

const meta: Meta<typeof FeatureList> = {
    title: 'Components/FeatureList',
    component: FeatureList,
    tags: ['autodocs'],
};

export default meta;

type FeatureListStory = StoryObj<typeof FeatureList>;

export const DefaultFeatureList: FeatureListStory = {
    args: {
        features: [
            { name: 'Feature One', included: true },
            { name: 'Feature Two', included: false },
            { name: 'Feature Three', included: true },
        ],
        isHighlighted: false,
    },
};

export const HighlightedFeatureList: FeatureListStory = {
    args: {
        features: [
            { name: 'Feature One', included: true },
            { name: 'Feature Two', included: false },
            { name: 'Feature Three', included: true },
        ],
        isHighlighted: true,
    },
};