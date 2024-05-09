import { Dispatch, SetStateAction, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();

  //   funzione che definisce i suoi parametri attraverso un parametro di tipo generico
  //   che ci permette di specificare il tipo dei parametri in ingresso caso per caso, quindi dare la possibilità a targetData di essere o string o boolean,
  //   ma soprattutto di tipizzare la funzione setter qualche volta con Dispatch<SetStateAction<string>> e qualche volta Dispatch<SetStateAction<boolean>>
  //   senza ricorrere a stratagemmi peggiori

  // questa è una funzione classica e la tipizzazione avviene sui singoli parametri in maniera efficace
  function handleChange<T>(setSate: Dispatch<SetStateAction<T>>, targetData: T) {
    setSate(targetData);
  }

  // se volessimo scriverla come variabile che contiene una funzione dovremmo andare a tipizzare la variabile,
  // specificando il tipo della funzione che riceverà come valore che possiamo fare in maniera elegante creando un Type Alias handleChangeType

  //   type handleChangeType = <T>(setSate: Dispatch<SetStateAction<T>>, targetData: T) => void;

  // poi applicato come tipo a handleChange

  //   const handleChange: handleChangeType = (setSate, targetData) => {
  //     setSate(targetData);
  //   };

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
            // in questo caso usare una funzione DIRETTAMENTE all'interno del valore di una prop fa sì che 
            // il parametro venga tipizzato in automatico, tramite inferenza
            (e) => {e.preventDefault()}
                // diverso è invece quando la funzione diventa esterna! (vedi sotto)
          }> */}

          {/* handleSubmit, che è una funzione esterna, perde la capacità di ricevere il tipo del suo parametro in automatico e 
            bisogna assegnarglielo manualmente sulla definizione del parametro (vedi definizione funzione) */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="inserisci il tuo nome"
                value={name}
                // onChange={e => setName(e.target.value)}

                // specificare il parametro di tipo è superfluo perché verrà correttamente inferito da TS
                // (fai l'hover sul prossimo handleChange per avere conferma)
                onChange={e => handleChange<string>(setName, e.target.value)}
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
