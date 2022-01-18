import React from "react";
import styled from "styled-components";
import styles from "./StyledBox.module.css";
const StyledBox = (props) => {
  return (
    <div>
      {props.box.map((itemBox, index) => {
        return (
          <div
            key={index}
            className={styles.box}
            style={{ backgroundColor: itemBox }}
          >
            {" "}
            {/* {itemBox} */}
          </div>
        );
      })}
    </div>
  );
};

// const StyledBox = styled.div`
//   border: 1px solid lightgray;
//   background: ${(props) => props.bgColor};
//   width: ${(props) => props.width || "100px"};
//   height: ${(props) => props.height || "100px"};
//   display: inline-block;
// `;

export default StyledBox;
