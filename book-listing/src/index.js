import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Author />
      <Title />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhGeDd0pCpEpBTWxjcXymXZY8uGUX86GQWg&s"
      alt="book cover"
    />
  );
};
const Author = () => {
  return <h1> Taqi Haider</h1>;
};

const Title = () => {
  return <h1> Coffee and books</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
