import { Component } from "react";
import { Spinner } from "react-bootstrap";

// abbiamo creato un'interfaccia per le props di questo componente
// siccome è un'interfaccia propria di questo componente ha senso crearla e lasciarla in questo file
interface ClassComponentProps {
  subtitle: string;
  color?: string; // questa diventa una proprietà opzionale
}

interface ClassComponentState {
  isLoading: boolean;
}

// come si fornisce un'interfaccia al componente? tramite parametro di tipo utilizzando i generics
// il primo parametro "P" corrisponde all'interfaccia delle props
// il secondo parametro "S" corrisponde all'interfaccia dello state
class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    isLoading: true
  };

  render() {
    return (
      <div style={{ color: this.props.color }} onClick={() => this.setState({ isLoading: false })}>
        <h2>Componente a Classe{this.state.isLoading ? "..." : "!"}</h2>
        <div className="text-center">
          {this.state.isLoading && <Spinner variant="primary" animation="border"></Spinner>}
        </div>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default ClassComponent;
