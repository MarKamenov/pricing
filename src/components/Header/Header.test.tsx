import { render } from '@testing-library/react';
import { Header } from './Header';

jest.mock("../../contexts/ThemeContext", () => ({
    useTheme: () => ({
        theme: "dark",
        toggleTheme: jest.fn(),
    }),
}));

describe('Header component', () => {

    test('should render component', () => {
        const { container } = render(<Header />)

        expect(container).toBeDefined();
    });

    test('should match snapshot', () => {
        const { container } = render(<Header />);

        expect(container).toMatchSnapshot();
    });
});

