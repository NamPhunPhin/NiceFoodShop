import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/shipper.jpg";
import "../styles/hero-section.css";

import "../styles/home.css";
import products from "../assets/fake-data/products.js";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/shipper2.jpg";

import shipper3Img from "../assets/images/shipper3.jpg";
import { Button } from "@mui/material";

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "ICE CREAM") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ice Cream"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "DRINK") {
      const filteredProducts = products.filter(
        (item) => item.category === "Drink"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "LUNCH") {
      const filteredProducts = products.filter(
        (item) => item.category === "Lunch"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Dễ dàng đặt hàng</h5>
                <h1 className="mb-4 hero__title">
                  <span>Bạn Đang Đói ?</span> Hãy gọi ngay cho chúng tôi
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <Button variant="contained" href="/" color="success">
                    Oder now
                  </Button>
                  <Button variant="outlined" href="/foods" color="success">
                    See all foods
                  </Button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Hãy đợi ở nhà</h2>
              <h2 className="feature__title">
                chúng tôi sẽ <span>đưa tận miệng</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Sản Phẩm Nổi Bật</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DRINK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DRINK")}
                >
                  Drink
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ICE CREAM" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ICE CREAM")}
                >
                  Ice Cream
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "LUNCH" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("LUNCH")}
                >
                  Lunch
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>should choose Nicefoods</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Sản Phẩm Tốt Nhất</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  <span>Khách hàng thân thiết</span> của chúng tôi nói gì ?
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae tempore doloribus laboriosam omnis sequi dolorem
                  perferendis officiis ipsam doloremque consequatur veritatis
                  esse nisi, quibusdam dolor, rem pariatur tenetur suscipit sint
                  eius dignissimos minus accusantium, autem illo voluptate.
                  Ratione harum consectetur facilis. Dicta magni quos nihil
                  repellat tenetur, amet ipsa nemo.
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={shipper3Img} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
