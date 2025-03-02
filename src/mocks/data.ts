import { Feature, PricingPlan } from "../types";

export const mockPlan: PricingPlan = {
    id: '1',
    name: "Professional",
    description: "A great plan for professionals",
    price: 25,
    isHighlighted: true,
    features: [{ name: "20,000+ of PNG & SVG graphics", included: true },
    { name: "Access to 100 million stock images", included: true },
    { name: "Upload custom icons and fonts", included: false },],
};


export const mockFeatures: Feature[] = [
    { name: "Feature 1", included: true },
    { name: "Feature 2", included: false },
    { name: "Feature 3", included: true },
]

export const basicPlan: PricingPlan = {
    id: "basic-plan",
    name: 'Basic',
    description: 'For individuals and small teams',
    price: 19,
    isHighlighted: false,
    features: [
        { name: '5 Projects', included: true },
        { name: '10 Users', included: true },
        { name: 'Basic Support', included: true },
        { name: 'Advanced Analytics', included: false },
    ],
};

export const proPlan: PricingPlan = {
    id: "pro-plan",
    name: 'Pro',
    description: 'For growing businesses with more needs',
    price: 49,
    isHighlighted: true,
    features: [
        { name: 'Unlimited Projects', included: true },
        { name: '50 Users', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
    ],
};

export const enterprisePlan: PricingPlan = {
    id: "enterprise-plan",
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 99,
    isHighlighted: false,
    features: [
        { name: 'Custom Projects', included: true },
        { name: 'Unlimited Users', included: true },
        { name: '24/7 Support', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Integration Options', included: true },
    ],
};