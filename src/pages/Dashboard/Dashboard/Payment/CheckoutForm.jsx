import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
            className="bg-white py-5 px-2 text-black"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
            className="bg-orange-800 px-5 py-2 rounded mt-5 font-bold"
            type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;