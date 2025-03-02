import { render, screen } from "@testing-library/react";
import Pricing from "./Pricing";

describe("Pricing component", () => {
    test('should render component', () => {
        const { container } = render(<Pricing />)

        expect(container).toBeDefined();
    });

    test('should match snapshot', () => {
        const { container } = render(<Pricing />)

        expect(container).toMatchSnapshot();
    });

    test("displays all pricing plans", () => {
        render(<Pricing />);
        const plans = screen.getAllByRole("heading", { level: 2 });

        expect(plans.length).toBe(3);
    });

    test("ensures each pricing plan has a CTA button", () => {
        render(<Pricing />);
        const buttons = screen.getAllByRole("button", { name: /get started/i });

        expect(buttons.length).toBe(3);
    });

    test("ensures each feature list is displayed with correct items", () => {
        render(<Pricing />);
        const featureLists = screen.getAllByRole("list");

        expect(featureLists.length).toBe(3);
        featureLists.forEach((list) => {
            expect(list.children.length).toBeGreaterThan(0);
        });
    });
});