import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();

  //   type handleChangeType = <T>(setSate: Dispatch<SetStateAction<T>>, targetData: T) => void;

  //   const handleChange: handleChangeType = (setSate, targetData) => {
  //     setSate(targetData);
  //   };

  function handleChange<T>(setSate: Dispatch<SetStateAction<T>>, targetData: T) {
    setSate(targetData);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("SUBMIT", {
      name,
      surname,
      checkbox
    });

    navigate("/");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {/* <Form onSubmit={ 
            // in questo caso usare una funzione DIRETTAMENTE all'interno del valore di una prop fa sì che il parametro venga tipizzato in automatico, tramite inferenza
            (e) => {e.preventDefault()}
                // diverso è invece quando la funzione diventa esterna! (vedi sotto)
          }> */}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="inserisci il tuo nome"
                value={name}
                // onChange={e => setName(e.target.value)}
                onChange={e => handleChange(setName, e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="inserisci il tuo nome"
                value={surname}
                // onChange={e => setSurname(e.target.value)}
                onChange={e => handleChange(setSurname, e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                label="Check me out"
                type="checkbox"
                checked={checkbox}
                // onChange={e => setCheckbox(e.target.checked)}
                onChange={e => handleChange(setCheckbox, e.target.checked)}
              />
            </Form.Group>
            <Button type="submit">Invia</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
