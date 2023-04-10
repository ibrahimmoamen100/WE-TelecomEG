import React from "react";
import styled from "styled-components";
import "../../index.css";
import bg from "../../img/prepaid.png";
import { connect } from "react-redux";
import addData from "../../reducers/actions";

let BalanceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.7;
  position: relative;
  max-width: 100%;
  padding: 2.85em 1.5em;
  background-image: linear-gradient(120deg, #702283, #962071 50%, #ff00a4);
  border-radius: 0.5em;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  @media (max-width: 992px) {
    width: 100%;
    min-width: 0;
  }
  @media (max-width: 768px) {
    padding: 1em 0.5em;
  }
`;
function Balance(props) {
  console.log(props);

  return (
    <BalanceContent className="balance_content px-5-sm py-4-sm">
      <img
        src={bg}
        style={{
          width: "23em",
          position: "absolute",
          left: "0%",
          bottom: "0%",
          objectFit: "cover",
          transform: "rotateY(180deg)",
          zIndex: "2",
          pointerEvents: "none",
        }}
        alt="this img"
      />
      <h2
        className="balance_label text-white fs-4 pb-1 "
        style={{ zIndex: "5" }}
      >
        الرصيد الحالي
      </h2>
      <span className="balance_price text-white fs-3 " style={{ zIndex: "5" }}>
        {/* 210.75 */}
        {props.content.balance}
        <span className="fs-5" style={{ zIndex: "5" }}>
          {"    "}
          جنيه
        </span>
      </span>
      <button className="btn btn-light  mt-5 px-3 py-1" style={{ zIndex: "5" }}>
        اشحن
      </button>
    </BalanceContent>
  );
}

export default connect(
  (state) => {
    return {
      content: state,
    };
  },
  { addData }
)(Balance);
