import React from "react";

const Footer = () => {
  return (
    <footer
      className="shadow-lg d-flex justify-content-center page-footer"
      style={{ backgroundColor: "#555555" }}
    >
      <img
        src="http://imgfz.com/i/THxof0e.png"
        alt=""
        style={{ width: "5em" }}
      />
      <p style={{ color: "#c9c9c9", fontSize: "12px", margin: "10px" }}>
        Copyright 2021 Equifax Inc. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
