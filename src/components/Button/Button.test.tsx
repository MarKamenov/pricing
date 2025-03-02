import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from './Button';

describe('Button component', () => {
    const mockOnClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should render component', () => {
        const { container } = render(<Button ariaLabel='label' onClick={mockOnClick}>Button text</Button>)

        expect(container).toBeDefined();
    });

    test('should match snapshot', () => {
        const { container } = render(<Button ariaLabel='label' onClick={mockOnClick}>Button text</Button>)

        expect(container).toMatchSnapshot();
    });

    test("renders correctly with given props", () => {
        render(
            <Button ariaLabel="Test Button" onClick={mockOnClick}>
                Click Me
            </Button>
        );

        const button = screen.getByRole("button", { name: /test button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Click Me");
        expect(button).not.toBeDisabled();
    });

    test("calls onClick when clicked", () => {
        render(
            <Button ariaLabel="Clickable Button" onClick={mockOnClick}>
                Click Me
            </Button>
        );

        const button = screen.getByRole("button", { name: /clickable button/i });
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("does not call onClick when disabled", () => {
        render(
            <Button ariaLabel="Disabled Button" onClick={mockOnClick} disabled>
                Cannot Click
            </Button>
        );

        const button = screen.getByRole("button", { name: /disabled button/i });
        expect(button).toBeDisabled();
        fireEvent.click(button);
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    test("is accessible via keyboard (Enter key)", () => {
        render(
            <Button ariaLabel="Keyboard Accessible Button" onClick={mockOnClick}>
                Press Enter
            </Button>
        );

        const button = screen.getByRole("button", { name: /keyboard accessible button/i });
        button.focus();
        expect(button).toHaveFocus();

        fireEvent.keyDown(button, { key: "Enter", code: "Enter" });

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});

