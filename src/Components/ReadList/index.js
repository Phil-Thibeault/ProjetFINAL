import React, { Component } from "react";
import CarteLivre from "../Livre/CarteLivre";

import Nav from "../Nav";
import PopUp from "../PopUp";

class ReadList extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      showPopUp: false,
      list: "ReadList"
    };

    this.popUp = this.popUp.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.books !== prevProps.books) {
      this.setState({
        books: this.props.books
      });
    }
    console.log(this.state.books);
  }

  popUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  updateReadList(array) {
    let books = this.state.books;
  }

  render() {
    return (
      <div className="List">
        <Nav popUp={this.popUp} />
        {this.state.showPopUp ? (
          <PopUp
            text={this.state.list}
            closePopUp={this.popUp}
            List={this.updateReadList}
            currentPage="ReadList"
          />
        ) : null}
        {this.state.books !== [] ? (
          this.state.books.map((book, index) => {
            let image = book[0];
            let title = book[1];
            let author = book[2];

            return (
              <CarteLivre
                key={index}
                img={image}
                title={title}
                author={author}
              />
            );
          })
        ) : (
          <p>Nothing to show yet.</p>
        )}
      </div>
    );
  }
}

export default ReadList;
