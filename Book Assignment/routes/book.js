const express = require("express");
const books = require("../books.json");
const fs = require("fs");
const route = express.Router();

route.get("/books", (req, res) => {
  res.json(books);
});
route.get("/book/:bookid", (req, res) => {
  let bookid = req.params.bookid;
  let book = books.find((book) => book.bookid == bookid);
  console.log(book);
  res.json(book);
});
route.post("/add/book", (req, res) => {
  books.push(req.body);
  fs.writeFile("book.json", JSON.stringify(books), (err) => {
    if (err) {
      console.log("Book cannot added");
    } else {
      res.end("Book added successfully");
    }
  });
});
route.put("/edit/book/:bookid", (req, res) => {
  let bookid = req.params.bookid;
  let index = books.findIndex((book) => book.bookid == bookid);
  books[index].bookname='Think and grow rich'
  fs.writeFile("book.json", JSON.stringify(books), (err) => {
    if (err) {
      console.log("Book cannot updated");
    } else {
      res.end("Book Updated successfully");
      console.log(`Updated ${books[index].bookname}`);
    }
  });
});

module.exports = route;