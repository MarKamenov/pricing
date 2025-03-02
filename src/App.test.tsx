import { render, screen } from "@testing-library/react";
import { App } from "./App";

jest.mock("./contexts/ThemeContext", () => ({
    useTheme: () => ({
        theme: "dark",
        toggleTheme: jest.fn(),
    }),
}));

jest.mock("./MainRoutes", () => ({
    MainRoutes: jest.fn(() => <div data-testid="main-routes"></div>),
}));

describe("App Component", () => {
    test("renders the Header", () => {
        render(<App />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
    });

    test("renders the Accessible Navigation", () => {
        render(<App />);
        expect(screen.getByTestId("accessible-navigation")).toBeInTheDocument();
    });

    test("renders the MainRoutes", () => {
        render(<App />);
        expect(screen.getByTestId("main-routes")).toBeInTheDocument();
    });
});



