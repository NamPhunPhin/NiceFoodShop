import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email === "" || password === "" || name === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    } else if (password.length < 6) {
      toast.error("Mật khẩu tối thiểu 6 ký tự!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    } else if (!regex.test(email)) {
      toast.error("Email không hợp lệ!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      flag = false;
    }
    if (flag === true) {
      toast.success("Đăng ký thành công!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Nhập tên của bạn"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  style={{ marginTop: 20 }}
                  label="Nhập email của bạn"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  style={{ marginTop: 20 }}
                  label="Nhập mật khẩu của bạn"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginTop: 20 }}
                >
                  Submit
                </Button>
              </form>
              <Link to="/login">Đã có tài khoản? Đăng nhập</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
