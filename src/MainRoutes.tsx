import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

// lazy imports
const PricingPage = lazy(() => import('./pages/Pricing'));

export const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/pricing" replace />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
    )
}