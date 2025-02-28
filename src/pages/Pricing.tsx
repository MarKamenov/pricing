import { PricingCard } from '../components/PricingCard/PricingCard';
import { Title } from '../components/Title';
import { pricing } from '../data/data';
import pricingStyles from './Pricing.module.scss';

const PricingPage = ({ plans = pricing }) => {
    return (
        <section id="home" aria-labelledby="pricing-heading" className={pricingStyles.pricingContainer}>
            <Title highlight={["powerful creators"]} subtitle='Choose a plan that’s right for you' align="center" size="2xl" >
                Powerful features for powerful creators
            </Title>
            <div className={pricingStyles.plansWrapper}>
                {plans.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>

        </section>
    );
}

export default PricingPage;
