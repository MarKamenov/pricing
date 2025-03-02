import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AccessibleNavigation } from '../AccessibleNavigation'
import { useLocation } from 'react-router'

// Mock the useLocation hook
jest.mock('react-router', () => ({
    useLocation: jest.fn()
}))

describe('AccessibleNavigation Component', () => {
    // Mock implementation for useLocation
    const mockUseLocation = useLocation as jest.Mock

    beforeEach(() => {
        jest.useFakeTimers()
        jest.clearAllMocks()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    describe('Navigation Announcements', () => {
        test('announces navigation when path changes', async () => {
            // Mock location with a path
            mockUseLocation.mockReturnValue({ pathname: '/about' })

            render(<AccessibleNavigation />)

            // Fast-forward timer to trigger the setTimeout
            act(() => {
                jest.advanceTimersByTime(500)
            })

            const announcement = screen.getByRole('status')
            expect(announcement).toHaveTextContent('Navigated to about page.')
        })

        test('does not announce when on root path', () => {
            // Mock location with root path
            mockUseLocation.mockReturnValue({ pathname: '/' })

            render(<AccessibleNavigation />)

            act(() => {
                jest.advanceTimersByTime(500)
            })

            const announcement = screen.getByRole('status')
            expect(announcement).toHaveTextContent('')
        })

        test('updates announcement when location changes', () => {
            // Initial render with home path
            mockUseLocation.mockReturnValue({ pathname: '/' })
            const { rerender } = render(<AccessibleNavigation />)

            // Change location to about page
            mockUseLocation.mockReturnValue({ pathname: '/about' })
            rerender(<AccessibleNavigation />)

            act(() => {
                jest.advanceTimersByTime(500)
            })

            const announcement = screen.getByRole('status')
            expect(announcement).toHaveTextContent('Navigated to about page.')
        })
    })

    describe('Timing Behavior', () => {
        test('waits 500ms before announcing navigation', () => {
            mockUseLocation.mockReturnValue({ pathname: '/contact' })

            render(<AccessibleNavigation />)

            // Check immediately
            const announcementBefore = screen.getByRole('status')
            expect(announcementBefore).toHaveTextContent('')

            // Advance timer by 499ms
            act(() => {
                jest.advanceTimersByTime(499)
            })
            expect(screen.getByRole('status')).toHaveTextContent('')

            // Advance to 500ms
            act(() => {
                jest.advanceTimersByTime(1)
            })
            expect(screen.getByRole('status')).toHaveTextContent('Navigated to contact page.')
        })
    })

    describe('Accessibility', () => {
        test('has correct accessibility attributes', () => {
            mockUseLocation.mockReturnValue({ pathname: '/about' })

            render(<AccessibleNavigation />)

            const announcement = screen.getByRole('status')
            expect(announcement).toHaveAttribute('aria-live', 'polite')
            expect(announcement).toHaveAttribute('aria-atomic', 'true')
            expect(announcement).toHaveClass('sr-only')
        })

        test('maintains accessibility attributes when empty', () => {
            mockUseLocation.mockReturnValue({ pathname: '/' })

            render(<AccessibleNavigation />)

            const announcement = screen.getByRole('status')
            expect(announcement).toHaveAttribute('aria-live', 'polite')
            expect(announcement).toHaveAttribute('aria-atomic', 'true')
            expect(announcement).toHaveClass('sr-only')
        })
    })

    describe('Edge Cases', () => {
        test('handles nested paths correctly', () => {
            mockUseLocation.mockReturnValue({ pathname: '/blog/post/123' })

            render(<AccessibleNavigation />)

            act(() => {
                jest.advanceTimersByTime(500)
            })

            expect(screen.getByRole('status')).toHaveTextContent('Navigated to blog/post/123 page.')
        })

        test('handles paths with special characters', () => {
            mockUseLocation.mockReturnValue({ pathname: '/search?q=test' })

            render(<AccessibleNavigation />)

            act(() => {
                jest.advanceTimersByTime(500)
            })

            expect(screen.getByRole('status')).toHaveTextContent('Navigated to search?q=test page.')
        })

        test('handles rapid navigation changes', () => {
            // Initial render
            mockUseLocation.mockReturnValue({ pathname: '/page1' })
            const { rerender } = render(<AccessibleNavigation />)

            // Change location quickly multiple times
            mockUseLocation.mockReturnValue({ pathname: '/page2' })
            rerender(<AccessibleNavigation />)

            mockUseLocation.mockReturnValue({ pathname: '/page3' })
            rerender(<AccessibleNavigation />)

            // Only the last navigation should be announced
            act(() => {
                jest.advanceTimersByTime(500)
            })

            expect(screen.getByRole('status')).toHaveTextContent('Navigated to page3 page.')
        })
    })
})
