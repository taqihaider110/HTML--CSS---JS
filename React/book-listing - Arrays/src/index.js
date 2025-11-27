import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import img2 from "./images/Goku.jpeg";

const book = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhGeDd0pCpEpBTWxjcXymXZY8uGUX86GQWg&s",
    title: "One Man Army",
    author: "Hekiuro Tsuruta",
  },
  {
    img: img2,
    title: " Dragon ball",
    author: " Akira Toriyama",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {book.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <img src={props.img} alt={props.title} />
    </article>
  );
};

// const Image = () => {
//   return (
//     <img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhGeDd0pCpEpBTWxjcXymXZY8uGUX86GQWg&s"
//       alt="book cover"
//     />
//   );
// };
// const Author = () => {
//   return <h1> Taqi Haider</h1>;
// };

// const Title = () => {
//   return <h1> Coffee and books</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
