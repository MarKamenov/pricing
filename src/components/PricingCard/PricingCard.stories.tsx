import { Meta, StoryFn } from '@storybook/react';
import { PricingCard } from './PricingCard';
import { basicPlan, enterprisePlan, proPlan } from '../../mocks';

const meta: Meta<typeof PricingCard> = {
    title: 'Components/PricingCard',
    component: PricingCard,
    argTypes: {
        plan: {
            control: 'object',
        },
    },
};

export default meta;

type Story = StoryFn<typeof PricingCard>;

export const Basic: Story = (args) => <PricingCard {...args} />;
// Basic Story
Basic.args = {
    plan: basicPlan,
}

export const Pro: Story = (args) => <PricingCard {...args} />;
// Pro Story (Highlighted)
Pro.args = {
    plan: proPlan,
}

export const Enterprise: Story = (args) => <PricingCard {...args} />;
// Enterprise Story
Enterprise.args = {
    plan: enterprisePlan,
}
