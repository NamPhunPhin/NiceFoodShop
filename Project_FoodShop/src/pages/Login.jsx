import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "" || password === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    }
    if (flag === true) {
      toast.success("Đăng nhập thành công!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Nhập email của bạn"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  style={{ marginTop: 20 }}
                  label="Nhập mật khẩu của bạn"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/register">Đăng ký tài khoản</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
