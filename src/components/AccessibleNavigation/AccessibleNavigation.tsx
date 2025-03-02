import { useEffect, useState } from "react"
import { useLocation } from "react-router"

export const AccessibleNavigation = () => {
    // the message that will be announced
    const [message, setMessage] = useState('')
    // get location from router
    const location = useLocation()

    // only run this when location change (note the dependency [location])
    useEffect(() => {
        // ignore the /
        if (location.pathname.slice(1)) {
            // make sure navigation has occurred and screen reader is ready
            setTimeout(() => setMessage(`Navigated to ${location.pathname.slice(1)} page.`), 500)
        } else {
            setMessage('')
        }
    }, [location])

    return (
        <span data-testid="accessible-navigation" className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {message}
        </span>
    )
}
