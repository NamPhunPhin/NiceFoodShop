import React, { useState } from "react";
import { toast } from "react-toastify";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";
import { Button, TextField } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id);
  if (!product) {
    return (
      <>
        <h2 className="text-center">Không tìm thấy sản phẩm này</h2>
      </>
    );
  } else {
    window.scrollTo(0, 0);
  }
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter(
    (item) => category === item.category && item.id !== id
  );

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (enteredName === "" || enteredEmail === "" || reviewMsg === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    } else if (!regex.test(enteredEmail)) {
      toast.error("Email không hợp lệ!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    }

    if (flag === true) {
      toast.success("Đã gửi bình luận!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="product__main-img">
                <img
                  src={product.image01}
                  alt=""
                  style={{
                    width: 450,
                    maxWidth: "100%",
                    display: "block",
                    margin: "auto",
                  }}
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Giá: <span>${price}</span>
                </p>
                <p className="category">
                  Danh mục: <span>{category}</span>
                </p>
                <p className="mb-5 category">
                  Mô tả: <span>{desc.substring(0, 50)}</span>
                </p>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<AddCircleOutline />}
                  onClick={addItem}
                >
                  Add to cart
                </Button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3 mt-5">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Mô tả
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Đánh giá
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <form className="form" onSubmit={submitHandler}>
                    <TextField
                      label="Nhập tên của bạn"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setEnteredName(e.target.value)}
                    />
                    <TextField
                      style={{ marginTop: 20 }}
                      label="Nhập email của bạn"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setEnteredEmail(e.target.value)}
                    />
                    <TextField
                      style={{ marginTop: 20 }}
                      label="Nhập bình luận"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setReviewMsg(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="success"
                      style={{ marginTop: 20 }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
