import type { CartItem as CartItemType } from "../types";
import { useCartStore } from "../stores/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="cart-item">
      {item.image && (
        <img src={item.image} alt={item.name} className="cart-item-image" />
      )}
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">{item.price} ₽</p>
      </div>
      <div className="cart-item-quantity">
        <button
          className="quantity-btn"
          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <p className="cart-item-total">{item.price * item.quantity} ₽</p>
      <button className="remove-btn" onClick={() => removeItem(item.productId)}>
        Удалить
      </button>
    </div>
  );
}
