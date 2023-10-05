import React from "react";
import notFoundImg from "../assets/images/404.jpg";
function NotFound() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "50vh" }}
    >
      <img
        src={notFoundImg}
        alt="nicefoods"
        style={{
          width: 600,
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

export default NotFound;
