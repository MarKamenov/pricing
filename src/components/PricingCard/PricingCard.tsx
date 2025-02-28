import { Button } from "../Button"
import FeatureList from "../FeatureList/FeatureList"
import { cn } from '../../lib'
import pricingCardStyles from "./pricingCard.module.scss"
import { PricingPlan } from "../../types"

export interface PricinCardProps {
    plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricinCardProps) => {
    return (
        <div className={cn(pricingCardStyles.card, plan.isHighlighted ? pricingCardStyles.highlighted : '')}>
            <div className={pricingCardStyles.header}>
                <h2 className={cn(pricingCardStyles.name, plan.isHighlighted ? pricingCardStyles.highlighted : '')}>{plan.name}</h2>
                <p className={cn(pricingCardStyles.description, plan.isHighlighted ? pricingCardStyles.highlighted : '')}>{plan.description}</p>
            </div>

            <div className={cn(pricingCardStyles.pricing, plan.isHighlighted ? pricingCardStyles.highlighted : '')}>
                <span className={pricingCardStyles.currency}>$</span>
                <span className={pricingCardStyles.price}>{plan.price}</span>
                <span className={cn(pricingCardStyles.period, plan.isHighlighted ? pricingCardStyles.highlighted : '')}>/ Month</span>
            </div>

            <Button className={pricingCardStyles.ctaButton} ariaLabel={`Get started with the ${plan.name} plan`} onClick={() => { }} text="Get Started Now" variant={plan.isHighlighted ? "primary" : "secondary"} />

            <FeatureList features={plan.features} isHighlighted={plan.isHighlighted} />
        </div>
    )
}

