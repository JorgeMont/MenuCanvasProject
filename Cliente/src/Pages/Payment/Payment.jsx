import { FaCreditCard, FaCcPaypal } from "react-icons/fa";
import './Payment.scss';

const Payment = () => {

    return(
        <div className="payment__container">
        <h1>Pago</h1>
        <p className="payment__subtitle">Elige el método de pago que mas prefieras.</p>

        <div className="payment__types-container">
            <a href="https://buy.stripe.com/test_fZe6qq37UatA6je288">
                <div className="payment__types-stripe">
                    <div className="payment__types-stripe_icon">
                        <FaCreditCard/>
                    </div>
                    <p>Pago con tarjeta de Crédito/Débito</p>
                </div>
            </a>

            <a href="#">
                <div className="payment__types-paypal">
                    <div className="payment__types-stripe_icon">
                        <FaCcPaypal/>
                    </div>
                    <p>Pago con Paypal</p>
                </div>
            </a>

        </div>
    </div>
    )
}

export default Payment;