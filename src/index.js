import React from "react";
import ReactDOM from "react-dom/client";
import { Book } from "./Book";
import "./index.css";

import { books } from "./books";

const booksArr = books;

const BookList = () => {
  const display = () => {
    console.log("display");
  };

  return (
    <>
      <h1>Best seller amazon</h1>
      <section className="booklist">
        {booksArr.map((book, index) => {
          return (
            <>
              <Book
                {...book}
                key={book.id}
                display={display}
                position={index + 1}
              ></Book>
            </>
          );
        })}
      </section>
    </>
  );
};

const App = ReactDOM.createRoot(document.getElementById("root"));
App.render(<BookList></BookList>);
