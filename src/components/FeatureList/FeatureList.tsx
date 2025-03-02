import featureListStyles from "./FeatureList.module.scss"
import { cn } from '../../lib'
import { Feature } from '../../types'
export interface FeatureListProps {
    features: Feature[];
    isHighlighted: boolean;
}

export const FeatureList = ({ features, isHighlighted }: FeatureListProps) => {
    return (
        <ul className={featureListStyles.featureList}>
            {features.map((feature: Feature, i: number) => (
                <li key={`${feature.name}-${i}`} className={cn(featureListStyles.featureItem, feature.included ? featureListStyles.included : featureListStyles.excluded)}>
                    <span data-testid='feature-icon' className={cn(featureListStyles.icon, isHighlighted ? featureListStyles.highlighted : '')} aria-hidden="true">
                        {feature.included ? "✓" : "×"}
                    </span>
                    <p className={cn(featureListStyles.featureName, isHighlighted ? featureListStyles.highlighted : '')}>{feature.name}</p>
                </li>
            ))}
        </ul>
    )
}



