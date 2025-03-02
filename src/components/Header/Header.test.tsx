import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Header } from "../Header"
import { useTheme } from "../../contexts/ThemeContext"

// Mock the useTheme hook
jest.mock("../../contexts/ThemeContext", () => ({
    useTheme: jest.fn(),
}))

// Mock Lucide React icons
jest.mock("lucide-react", () => ({
    Moon: () => <div data-testid="moon-icon">Moon Icon</div>,
    Sun: () => <div data-testid="sun-icon">Sun Icon</div>,
}))

describe("Header Component", () => {
    // Mock implementation of toggleTheme
    const toggleTheme = jest.fn()

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks()
    })

    describe("Light Theme", () => {
        beforeEach(() => {
            // Mock useTheme for light theme
            ; (useTheme as jest.Mock).mockReturnValue({
                theme: "light",
                toggleTheme,
            })
        })

        test("renders correctly in light theme", () => {
            render(<Header />)
            expect(screen.getByRole("banner")).toBeInTheDocument()
            expect(screen.getByTestId("moon-icon")).toBeInTheDocument()
        })

        test("has correct aria-label for light theme", () => {
            render(<Header />)
            const button = screen.getByRole("button")
            expect(button).toHaveAttribute("aria-label", "Switch to dark theme")
        })

        test("calls toggleTheme when button is clicked", () => {
            render(<Header />)
            const button = screen.getByRole("button")
            fireEvent.click(button)
            expect(toggleTheme).toHaveBeenCalledTimes(1)
        })
    })

    describe("Dark Theme", () => {
        beforeEach(() => {
            // Mock useTheme for dark theme
            ; (useTheme as jest.Mock).mockReturnValue({
                theme: "dark",
                toggleTheme,
            })
        })

        test("renders correctly in dark theme", () => {
            render(<Header />)
            expect(screen.getByRole("banner")).toBeInTheDocument()
            expect(screen.getByTestId("sun-icon")).toBeInTheDocument()
        })

        test("has correct aria-label for dark theme", () => {
            render(<Header />)
            const button = screen.getByRole("button")
            expect(button).toHaveAttribute("aria-label", "Switch to light theme")
        })

        test("calls toggleTheme when button is clicked", () => {
            render(<Header />)
            const button = screen.getByRole("button")
            fireEvent.click(button)
            expect(toggleTheme).toHaveBeenCalledTimes(1)
        })
    })

    describe("Button Component", () => {
        beforeEach(() => {
            ; (useTheme as jest.Mock).mockReturnValue({
                theme: "light",
                toggleTheme,
            })
        })

        test("renders with correct variant", () => {
            render(<Header />)
            const button = screen.getByRole("button")
            expect(button).toHaveClass("secondary")
        })
    })
})

