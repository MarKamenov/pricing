import featureListStyles from "./FeatureList.module.scss"
import { cn } from '../../lib'


export default function FeatureList({ features, isHighlighted }: any) {
    return (
        <ul className={featureListStyles.featureList}>
            {features.map((feature: any) => (
                <li key={feature.name} className={cn(featureListStyles.featureItem, feature.included ? featureListStyles.included : featureListStyles.excluded)}>
                    <span className={cn(featureListStyles.icon, isHighlighted ? featureListStyles.highlighted : '')} aria-hidden="true">
                        {feature.included ? "✓" : "×"}
                    </span>
                    <span className={cn(featureListStyles.featureName, isHighlighted ? featureListStyles.highlighted : '')}>{feature.name}</span>
                </li>
            ))}
        </ul>
    )
}



