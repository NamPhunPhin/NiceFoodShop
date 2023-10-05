import React from "react";

import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/shopping-cart.css";
import { Button } from "@mui/material";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handleCheckOut = () => {
    dispatch(cartActions.clearCart());
  };
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#fff" }}
            onClick={handleCheckOut}
          >
            Thanh toán
          </Button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
