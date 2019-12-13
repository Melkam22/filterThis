import React, { Component } from "react";
import "./App.css";
import BookList from "./component/BookList";
import SearchBook from "./component/SearchBook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "book1", author: "author1", page_size: 179 },
        { title: "book2", author: "author2", page_size: 250 },
        { title: "book3", author: "author3", page_size: 329 },
        { title: "book4", author: "author4", page_size: 348 },
        { title: "book5", author: "author5", page_size: 259 },
        { title: "book6", author: "author6", page_size: 179 },
        { title: "book7", author: "author7", page_size: 250 },
        { title: "book8", author: "author8", page_size: 329 },
        { title: "book9", author: "author9", page_size: 348 },
        { title: "book10", author: "author10", page_size: 259 }
      ],
      searchBook: ""
    };
  }
  //update function of search box
  handleBook = e => {
    console.log(e.target.value);
    this.setState({
      searchBook: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Filter my Books!</h2>
        <SearchBook handleBook={this.handleBook} />
        <BookList myBookList={this.state.books} />
      </div>
    );
  }
}

export default App;
