import React from "react";
import Book from "./Book";

function BookList(props) {
  let listedBooks = props.myBookList.map(book => {
    return (
      <Book
        title={book.title}
        author={book.author}
        page_size={book.page_size}
      />
    );
  });
  return <div>{listedBooks}</div>;
}

export default BookList;
