import React from "react";
import { wrap } from "module";

function Book(props) {
  return (
    <div
      style={{
        width: 240,
        height: 150,
        border: "none",
        backgroundColor: "rgba(234,174,94,7)",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 5,
        justifyContent: "space evenly",
        alignItems: "center"
      }}
    >
      <p>title: {props.title}</p>
      <p>author: {props.author}</p>
      <p>page_size: {props.page_size}</p>
    </div>
  );
}

export default Book;
