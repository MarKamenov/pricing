import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { FeatureList } from "../FeatureList"
import { mockFeatures } from "../../mocks"

describe("FeatureList Component", () => {


    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe("Basic Rendering", () => {
        test("renders all features", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            expect(screen.getByText("Feature 1")).toBeInTheDocument()
            expect(screen.getByText("Feature 2")).toBeInTheDocument()
            expect(screen.getByText("Feature 3")).toBeInTheDocument()
        })

        test("renders correct number of list items", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)
            const listItems = screen.getAllByRole("listitem")
            expect(listItems).toHaveLength(3)
        })

        test("renders empty list when no features provided", () => {
            render(<FeatureList features={[]} isHighlighted={false} />)
            const list = screen.getByRole("list")
            expect(list).toBeInTheDocument()
            expect(list.children).toHaveLength(0)
        })
    })

    describe("Feature States", () => {
        test("renders correct icons for included/excluded features", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const icons = screen.getAllByTestId("feature-icon")
            expect(icons[0]).toHaveTextContent("✓")
            expect(icons[1]).toHaveTextContent("×")
            expect(icons[2]).toHaveTextContent("✓")
        })

        test("applies correct classes for included features", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const items = screen.getAllByRole("listitem")
            expect(items[0]).toHaveClass("featureItem", "included")
            expect(items[2]).toHaveClass("featureItem", "included")
        })

        test("applies correct classes for excluded features", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const items = screen.getAllByRole("listitem")
            expect(items[1]).toHaveClass("featureItem", "excluded")
        })
    })

    describe("Highlight State", () => {
        test("applies highlight classes when isHighlighted is true", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={true} />)

            const icons = screen.getAllByTestId("feature-icon")
            const names = screen.getAllByText(/Feature/)

            icons.forEach((icon) => {
                expect(icon).toHaveClass("icon", "highlighted")
            })

            names.forEach((name) => {
                expect(name).toHaveClass("featureName", "highlighted")
            })
        })

        test("does not apply highlight classes when isHighlighted is false", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const icons = screen.getAllByTestId("feature-icon")
            const names = screen.getAllByText(/Feature/)

            icons.forEach((icon) => {
                expect(icon).toHaveClass("icon")
                expect(icon).not.toHaveClass("highlighted")
            })

            names.forEach((name) => {
                expect(name).toHaveClass("featureName")
                expect(name).not.toHaveClass("highlighted")
            })
        })
    })

    describe("Accessibility", () => {
        test("renders icons with aria-hidden", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const icons = screen.getAllByTestId("feature-icon")
            icons.forEach((icon) => {
                expect(icon).toHaveAttribute("aria-hidden", "true")
            })
        })

        test("uses semantic list elements", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            expect(screen.getByRole("list")).toBeInTheDocument()
            expect(screen.getAllByRole("listitem")).toHaveLength(3)
        })

        test("renders feature names in paragraph tags for better screen reader experience", () => {
            render(<FeatureList features={mockFeatures} isHighlighted={false} />)

            const paragraphs = screen.getAllByText(/Feature/).map((el) => el.tagName)
            expect(paragraphs).toEqual(["P", "P", "P"])
        })
    })

    describe("Edge Cases", () => {
        test("handles features with empty names", () => {
            const featuresWithEmptyName = [{ name: "", included: true }]
            render(<FeatureList features={featuresWithEmptyName} isHighlighted={false} />)

            const items = screen.getAllByRole("listitem")
            expect(items).toHaveLength(1)
        })

        test("handles malformed feature objects gracefully", () => {
            const malformedFeatures = [
                { name: "Feature 1" }, // missing included
                { included: true }, // missing name
                {}, // empty object
            ] as any[]

            expect(() => {
                render(<FeatureList features={malformedFeatures} isHighlighted={false} />)
            }).not.toThrow()
        })
    })
})

