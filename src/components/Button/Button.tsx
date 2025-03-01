import { ReactNode } from 'react';
import { cn } from '../../lib';
import buttonStyles from './Button.module.scss';

export interface ButtonProps {
    children: ReactNode
    variant?: "primary" | "secondary"
    onClick: () => void;
    size?: "small" | "medium" | "large";
    className?: string;
    ariaLabel: string;
    fullWidth?: boolean
    disabled?: boolean
}

export const Button = ({ ariaLabel, size = "small", children, className, variant = 'primary', onClick, fullWidth = false, disabled = false }: ButtonProps) => {
    const buttonClass = cn(buttonStyles.button, buttonStyles[variant], buttonStyles[size], fullWidth ? buttonStyles.fullWidth : "", disabled ? buttonStyles.disabled : "", className)

    return (
        <button aria-label={ariaLabel} className={buttonClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}