import React, { Component } from "react";
import "./App.css";
import BookList from "./component/BookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "book1", author: "author1", page_size: 179 },
        { title: "book2", author: "author2", page_size: 250 },
        { title: "book3", author: "author3", page_size: 329 },
        { title: "book4", author: "author4", page_size: 348 },
        { title: "book5", author: "author5", page_size: 259 }
      ],
      searchBook: ""
    };
  }
  render() {
    return (
      <div className="bookList">
        <h2>Filter my Books!</h2>
        <BookList myBookList={this.state.books} />
      </div>
    );
  }
}

export default App;
