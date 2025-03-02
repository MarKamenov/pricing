import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Header component', () => {

    test('should render component', () => {
        const { container } = render(<Button ariaLabel='label' onClick={jest.fn()}>Button text</Button>)

        expect(container).toBeDefined();
    });

    test('should match snapshot', () => {
        const { container } = render(<Button ariaLabel='label' onClick={jest.fn()}>Button text</Button>)

        expect(container).toMatchSnapshot();
    });
});

