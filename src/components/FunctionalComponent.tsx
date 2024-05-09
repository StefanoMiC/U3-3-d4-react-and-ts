import { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FunctionalComponentProps {
  subtitle: string;
  color?: string;
}

interface MovieObject {
  title: string;
  year: string;
}

const FunctionalComponent = ({ color, subtitle }: FunctionalComponentProps) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // secondo le best practices di TS se un valore può essere inferito bisognerebbe evitare di specificarlo espressamente,
  // quindi usremo la sintassi come segue:
  // tip: fai l'hover sul valore di stato e noterai che il tipo boolean è già stato inferito correttamente!
  const [isLoading, setIsLoading] = useState(false);
  // in questo se creiamo uno stato null, esigenza normale nel caso di oggetti che arrivano da una fetch per es.,
  // non possiamo lasciare che TS inferisca in automatico il tipo null (e solo null)

  // piuttosto dobbiamo avvertirlo della possibilità che il tipo di dato può variare nel tempo e
  // possa essere valido sia il tipo null che il tipo stabilito dalla nostra interfaccia MovieObject
  const [movieObj, setMovieObject] = useState<null | MovieObject>(null);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <div style={{ color }}>
      <h2 onClick={() => setIsLoading(!isLoading)}>Componente a funzione{isLoading ? "..." : "!"}</h2>
      <p>{subtitle}</p>

      <div className="text-center">{isLoading && <Spinner variant="primary" animation="border"></Spinner>}</div>

      <Link to="/" className="mt-3">
        Vai alle Classi
      </Link>

      <Button
        className="d-block mx-auto my-3"
        variant="dark"
        onClick={() =>
          setMovieObject({
            title: "Batman",
            year: "2022"
          })
        }
      >
        Set Movie Object
      </Button>
      <div>
        {movieObj ? (
          <div>
            <h4>{movieObj.title}</h4>
            <p>{movieObj.year}</p>
          </div>
        ) : (
          <Alert variant="warning">Clicca il bottone per ricevere l'oggetto</Alert>
        )}
      </div>
    </div>
  );
};

export default FunctionalComponent;
