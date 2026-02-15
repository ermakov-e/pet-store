import { useState } from "react";
import { useCartStore } from "../stores/cartStore";
import { CheckoutForm, type CheckoutData } from "./CheckoutForm";

export function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { totalPrice, clearCart } = useCartStore();

  const handleSubmit = async (data: CheckoutData) => {
    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Заказ оформлен:", { ...data, total: totalPrice });

      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error("Ошибка оформления заказа:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h3>Заказ успешно оформлен!</h3>
        <p>Спасибо за покупку. Мы свяжемся с вами в ближайшее время.</p>
        <button className="new-order-btn" onClick={() => setOrderPlaced(false)}>
          Вернуться в корзину
        </button>
      </div>
    );
  }

  return (
    <div className="checkout">
      {!isOpen ? (
        <button className="checkout-btn" onClick={() => setIsOpen(true)}>
          Оформить заказ
        </button>
      ) : (
        <div className="checkout-form-wrapper">
          <h3>Оформление заказа</h3>
          <CheckoutForm onSubmit={handleSubmit} isProcessing={isProcessing} />
          <button className="cancel-btn" onClick={() => setIsOpen(false)}>
            Отмена
          </button>
        </div>
      )}
    </div>
  );
}
