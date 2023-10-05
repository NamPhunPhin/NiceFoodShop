import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Không có sản phẩm nào</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Tổng thanh toán: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <div className="cart__page-btn">
                  <Button
                    variant="contained"
                    color="success"
                    style={{ marginRight: 12 }}
                  >
                    <Link to="/foods">Tiếp tục mua hàng</Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleCheckOut}
                  >
                    Thanh toán
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <DeleteIcon onClick={deleteItem} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default Cart;
