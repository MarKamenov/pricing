import { PricingCard } from '../components/PricingCard/PricingCard';
import { Title } from '../components/Title';
import { pricing } from '../data/data';
import pricingStyles from './Pricing.module.scss';

const PricingPage = ({ plans = pricing }) => {
    return (
        <section aria-labelledby="pricing-heading" className={pricingStyles.pricingContainer}>
            <Title highlight={['powerful creators']} subtitle='Choose a plan that’s right for you' align="center" >
                Powerful features for powerful creators
            </Title>
            <div className={pricingStyles.plansWrapper}>
                {plans.map(plan => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>
        </section>
    );
}

export default PricingPage;
