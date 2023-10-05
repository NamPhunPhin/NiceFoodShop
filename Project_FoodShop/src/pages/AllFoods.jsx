import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [currentProducts, setCurrentProducts] = useState(products);
  useEffect(() => {
    let searchedProduct = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    searchedProduct = searchedProduct.sort((a, b) => {
      switch (sorting) {
        case "ascending":
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        case "descending":
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        case "high-price":
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        case "low-price":
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        default:
          return 0;
      }
    });
    setCurrentProducts(searchedProduct);
  }, [searchTerm, sorting]);
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = currentProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(currentProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <TextField
                style={{ marginTop: 20 }}
                label="Nhập tên sản phẩm"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <FormControl fullWidth style={{ marginTop: 20 }}>
                <InputLabel id="demo-simple-select-label">
                  Hình thức sắp xếp
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Hình thức sắp xếp"
                  value={sorting}
                  onChange={(e) => {
                    setSorting(e.target.value);
                  }}
                >
                  <MenuItem value="ascending">Tên A-Z</MenuItem>
                  <MenuItem value="descending">Tên Z-A</MenuItem>
                  <MenuItem value="high-price">Giá tăng</MenuItem>
                  <MenuItem value="low-price">Giá giảm</MenuItem>
                </Select>
              </FormControl>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
