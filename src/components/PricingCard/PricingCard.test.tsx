import { render, screen } from "@testing-library/react";
import { PricingCard } from "./PricingCard";
import { mockPlan } from "../../mocks";

describe("PricingCard Component", () => {
    test("renders the pricing card with correct details", () => {
        render(<PricingCard plan={mockPlan} />);

        expect(screen.getByText("Professional")).toBeInTheDocument();
        expect(screen.getByText("A great plan for professionals")).toBeInTheDocument();
        expect(screen.getByText("$")).toBeInTheDocument();
        expect(screen.getByText("25")).toBeInTheDocument();
        expect(screen.getByText("/ Month")).toBeInTheDocument();
    });

    test("renders all the features", () => {
        render(<PricingCard plan={mockPlan} />);
        mockPlan.features.forEach((feature) => {
            expect(screen.getByText(feature.name)).toBeInTheDocument();
        });
    });

    test("renders the CTA button with correct label", () => {
        render(<PricingCard plan={mockPlan} />);
        const button = screen.getByRole("button", { name: /get started with the professional plan/i });
        expect(button).toBeInTheDocument();
    });
});
