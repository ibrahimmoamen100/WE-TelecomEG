import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
let AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 0.7;
  background-color: #fff;
  border-radius: 0.5em;
  padding: 2em 1.5em;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  gap: 3.5em;
  max-height: 265px;
  @media (max-width: 992px) {
    gap: 2em;
  }
`;

function Additional() {
  return (
    <AdditionalContainer className="additional_container">
      <h4>الباقات الإضافية و الخدمات</h4>
      <span className="text-center align-self-center fs-6 fw-bold">
        انت لست مشتركا فى باقات إضافية
      </span>
      <Link
        to="/Services"
        className="btn btn-primary align-self-end fs-6 btn-sm px-3"
        style={{ backgroundColor: "#702283" }}
      >
        إدارة الخدمات
      </Link>
    </AdditionalContainer>
  );
}

export default Additional;
