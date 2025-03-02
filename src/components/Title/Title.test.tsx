import { render, screen } from "@testing-library/react"
import { Title } from "../Title"

describe("Title component", () => {
    test('should render component', () => {
        const { container } = render(<Title>Hello World</Title>)

        expect(container).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { container } = render(<Title>Hello World</Title>);

        expect(container).toMatchSnapshot();
    });

    describe("Basic Rendering", () => {
        test("renders basic title without highlights", () => {
            render(<Title>Hello World</Title>)
            expect(screen.getByText("Hello World")).toBeInTheDocument()
        })

        test("renders with correct default props", () => {
            render(<Title>Default Props</Title>)
            const title = screen.getByText("Default Props")
            expect(title.tagName).toBe("H1")
            expect(title).toHaveClass("title", "align-left", "size-xl", "weight-bold", "color-primary")
        })
    })

    describe("Highlight Functionality", () => {
        test("renders with single highlight", () => {
            render(<Title highlight="World">Hello World</Title>)
            expect(screen.getByText("World")).toHaveClass("highlight")
        })

        test("renders with multiple highlights", () => {
            render(<Title highlight={["Hello", "World"]}>Hello Beautiful World</Title>)
            expect(screen.getByText("Hello")).toHaveClass("highlight")
            expect(screen.getByText("World")).toHaveClass("highlight")
        })

        test("handles case-insensitive highlights", () => {
            render(<Title highlight="WORLD">Hello World</Title>)
            expect(screen.getByText("World")).toHaveClass("highlight")
        })

        test("handles empty highlight array", () => {
            render(<Title highlight={[]}>Hello World</Title>)
            expect(screen.getByText("Hello World")).toBeInTheDocument()
        })

        test("handles highlight not found in text", () => {
            render(<Title highlight="Foo">Hello World</Title>)
            expect(screen.getByText("Hello World")).toBeInTheDocument()
        })
    })

    describe("Style Variations", () => {
        test("applies different alignments", () => {
            const { rerender } = render(<Title align="center">Centered Title</Title>)
            expect(screen.getByText("Centered Title")).toHaveClass("align-center")

            rerender(<Title align="right">Right Title</Title>)
            expect(screen.getByText("Right Title")).toHaveClass("align-right")
        })

        test("applies different sizes", () => {
            const { rerender } = render(<Title size="sm">Small Title</Title>)
            expect(screen.getByText("Small Title")).toHaveClass("size-sm")

            rerender(<Title size="3xl">Large Title</Title>)
            expect(screen.getByText("Large Title")).toHaveClass("size-3xl")
        })

        test("applies different weights", () => {
            const { rerender } = render(<Title weight="normal">Normal Weight</Title>)
            expect(screen.getByText("Normal Weight")).toHaveClass("weight-normal")

            rerender(<Title weight="semibold">Semibold Weight</Title>)
            expect(screen.getByText("Semibold Weight")).toHaveClass("weight-semibold")
        })

        test("applies different colors", () => {
            const { rerender } = render(<Title color="accent">Accent Color</Title>)
            expect(screen.getByText("Accent Color")).toHaveClass("color-accent")

            rerender(<Title color="secondary">Secondary Color</Title>)
            expect(screen.getByText("Secondary Color")).toHaveClass("color-secondary")
        })
    })

    describe("Component Variations", () => {
        test("renders different heading levels", () => {
            const { rerender } = render(<Title as="h2">H2 Title</Title>)
            expect(screen.getByText("H2 Title").tagName).toBe("H2")

            rerender(<Title as="h6">H6 Title</Title>)
            expect(screen.getByText("H6 Title").tagName).toBe("H6")
        })

        test("applies custom className", () => {
            render(<Title className="custom-class">Custom Class Title</Title>)
            expect(screen.getByText("Custom Class Title")).toHaveClass("custom-class")
        })
    })

    describe("Edge Cases", () => {
        test("handles undefined children", () => {
            render(<Title>{undefined}</Title>)
            expect(screen.getByRole("heading")).toBeInTheDocument()
            expect(screen.getByRole("heading")).toHaveTextContent("")
        })

        test("handles null children", () => {
            render(<Title>{null}</Title>)
            expect(screen.getByRole("heading")).toBeInTheDocument()
            expect(screen.getByRole("heading")).toHaveTextContent("")
        })

        test("handles empty string children", () => {
            render(<Title>{""}</Title>)
            expect(screen.getByRole("heading")).toBeInTheDocument()
            expect(screen.getByRole("heading")).toHaveTextContent("")
        })

        test("handles number children", () => {
            render(<Title>{42}</Title>)
            expect(screen.getByText("42")).toBeInTheDocument()
        })
    })
})

