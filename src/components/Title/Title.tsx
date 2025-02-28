import type { ReactNode } from "react"
import titleStyles from "./Title.module.scss"

interface TitleProps {
    children: ReactNode
    highlight?: string | string[]
    subtitle?: string
    align?: "left" | "center" | "right"
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    weight?: "normal" | "medium" | "semibold" | "bold"
    color?: "primary" | "secondary" | "accent" | "default"
    className?: string
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Title = ({
    children,
    highlight,
    align = "left",
    size = "xl",
    weight = "bold",
    color = "primary",
    className = "",
    subtitle,
    as: Component = "h1",
}: TitleProps) => {
    const titleClasses = `
    ${titleStyles.title}
    ${titleStyles[`align-${align}`]}
    ${titleStyles[`size-${size}`]}
    ${titleStyles[`weight-${weight}`]}
    ${titleStyles[`color-${color}`]}
    ${className}
  `.trim()

    if (!highlight) {
        return <Component className={titleClasses}>{children}</Component>
    }

    const highlights = Array.isArray(highlight) ? highlight : [highlight]
    const text = children?.toString() ?? ""

    // Split text by highlights and create an array of regular text and highlighted spans
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"))

    return (
        <div>
            <Component className={titleClasses}>
                {parts.map((part, index) => {
                    const isHighlighted = highlights.some((h) => part.toLowerCase() === h.toLowerCase())

                    return isHighlighted ? (
                        <span key={index} className={titleStyles.highlight}>
                            {part}
                        </span>
                    ) : (
                        part
                    )
                })}

            </Component>
            {subtitle && <p className={titleStyles.subtitle}>{subtitle}</p>}
        </div>

    )
}

