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