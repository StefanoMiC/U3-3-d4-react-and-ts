import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import IBook from "../interfaces/IBook";

// 'https://striveschool-api.herokuapp.com/food-books'

const FetchComponent = () => {
  // se non assegnassimo il tipo in questo stato l'array diventerebbe un array di never, e
  //  non avremmo mai la possibilità di utilizzare le proprietà dei futuri oggetti che si inseriranno all'interno dell'array iniziale

  //   in questo caso il tipo è un array di IBook ovvero IBook[]
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
      if (resp.ok) {
        const arrOfBooks = await resp.json();
        setBooks(arrOfBooks);
      } else {
        throw new Error("Errore nel reperire i libri");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Libri disponibili a database:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {books.map(book => (
          <SingleBook book={book} key={book.id} />
        ))}
      </Row>
    </Container>
  );
};

export default FetchComponent;
