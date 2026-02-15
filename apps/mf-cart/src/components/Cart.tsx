import { useEffect } from "react";
import { useCartStore } from "../stores/cartStore";
import { CartItem } from "./CartItem";
import { Checkout } from "./Checkout";

export function Cart() {
  const { items, totalItems, totalPrice } = useCartStore();
  const cartStore = useCartStore();

  // Читаем товары из localStorage при монтировании
  useEffect(() => {
    console.log('fdjgkhfdg')
  }, []);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из каталога</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Корзина ({totalItems})</h2>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">
          Итого: <strong>{totalPrice} ₽</strong>
        </p>
      </div>
      <Checkout />
    </div>
  );
}
