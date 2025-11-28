import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import img2 from "./images/Goku.jpeg";

const book = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhGeDd0pCpEpBTWxjcXymXZY8uGUX86GQWg&s",
    title: "One Man Army",
    author: "Hekiuro Tsuruta",
    id: 1,
  },
  {
    img: img2,
    title: " Dragon ball",
    author: " Akira Toriyama",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const Book = book.find((book) => book.id === id);
    console.log(Book);
  };
  return (
    <section className="booklist">
      {book.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <button onClick={() => getBook(id)}> Click Me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
