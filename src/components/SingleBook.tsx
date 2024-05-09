import { Card, Col } from "react-bootstrap";
import IBook from "../interfaces/IBook";

// le props di SingleBook sono un oggetto con proprietà book all'interno, il quale book dev'essere specificato nel tipo tramite l'interfaccia IBook
interface SingleBookProps {
  book: IBook;
}

// per questo motivo non possiamo assegnare IBook come tipo delle props, perché le props sono solo { book: {...}}
// è l'oggetto book ad avere bisogno del tipo IBook per definire le sue proprietà interne
const SingleBook = (props: SingleBookProps) => {
  console.log("SINGLE BOOK PROPS", props);
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={props.book.imageUrl} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
