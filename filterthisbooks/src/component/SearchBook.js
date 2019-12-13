import React from "react";

function SearchBook(props) {
  return (
    <input
      onChange={props.handleBook}
      type="text"
      placeholder="insert your search here"
    />
  );
}

export default SearchBook;
