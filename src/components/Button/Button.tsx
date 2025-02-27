import buttonStyles from './Button.module.scss';

export interface ButtonProps {
    text: string
    variant: "primary" | "secondary"
    onClick: () => void
    fullWidth?: boolean
    disabled?: boolean
}

export const Button = ({ text, variant, onClick, fullWidth = false, disabled = false }: ButtonProps) => {
    const buttonClass = `
      ${buttonStyles.button} 
      ${buttonStyles[variant]} 
      ${fullWidth ? buttonStyles.fullWidth : ""}
      ${disabled ? buttonStyles.disabled : ""}
    `

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}