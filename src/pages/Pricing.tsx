import { Button } from '../components/Button';
import pricingStyles from './Pricing.module.scss';

const PricingPage = () => {
    return (
        <section id="home" className={pricingStyles.home}>
            <div className="container">
                <div className={pricingStyles.wrapper}>
                    <h1>Mariyan Kamenov</h1>
                    <p>Front-End Developer</p>
                    <Button text='Test' variant='primary' onClick={() => { }} />
                </div>
            </div>
        </section>
    );
}

export default PricingPage;
