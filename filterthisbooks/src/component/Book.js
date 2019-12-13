import React from "react";

function Book(props) {
  return (
    <div
      style={{
        width: 200,
        border: "solid",
        backgroundColor: "rgba(234,74,94,.5)",
        display: "flex",
        flexDirection: "column",
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
