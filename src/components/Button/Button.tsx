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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if ((event.key === "Enter" || event.key === " ") && !disabled) {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <button type='button' aria-label={ariaLabel} className={buttonClass} onClick={onClick} onKeyDown={handleKeyDown} disabled={disabled}>
            {children}
        </button>
    )
}