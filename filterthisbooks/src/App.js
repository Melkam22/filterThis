import React, { Component } from "react";
import "./App.css";
import BookList from "./component/BookList";
import SearchBook from "./component/SearchBook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Thus Spoke Zarathustra",
          author: "Nietzsche",
          page_size: 350
        },
        { title: "Adefrise", author: "Dagnachew Worku", page_size: 330 },
        {
          title: "The philosophy of Right",
          author: "Hegel",
          page_size: 374
        },
        { title: "The Divine Comedy", author: "Dante", page_size: 566 },
        {
          title: "Le Voyage d'Hector",
          author: "Francois Lelord",
          page_size: 267
        },
        { title: "Don Quixote", author: "Miguel De Cervantes", page_size: 461 },
        {
          title: "Half of a Yellow Sun",
          author: "Ngozi Adichie",
          page_size: 433
        },
        {
          title: "Critique of Pure Reason",
          author: "Immanuel Kant",
          page_size: 480
        },
        { title: "Paradise Lost", author: "John Milton", page_size: 317 },
        {
          title: "The Karamazov Brothers",
          author: "Fyodor Dostoevsky",
          page_size: 1012
        },
        {
          title: "The Global Minotaur",
          author: "Yanis Varoufakis",
          page_size: 280
        },
        {
          title: "Under the Udala Trees",
          author: "Chinelo Okparanta",
          page_size: 328
        },
        { title: "Notre-Dame de Paris", author: "Victor Hugo", page_size: 697 },
        { title: "The Nomads Daughter", author: "Waris Dirie", page_size: 288 },
        {
          title: "Democracy in America",
          author: "Alexis de Tocqueville",
          page_size: 926
        }
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
    //filter function
    let filterMyBooks = this.state.books.filter(eachBook => {
      return eachBook.author
        .toUpperCase()
        .includes(this.state.searchBook.toUpperCase());
    }); /* comparing what we type with the existing list and sort the one inserted */
    return (
      <div>
        <h2>Filter my Books!</h2>
        <SearchBook handleBook={this.handleBook} />
        <BookList filterMyBooks={filterMyBooks /* this.state.books */} />{" "}
        {/* we replace myBookList with filterMyBooks */}
      </div>
    );
  }
}

export default App;
