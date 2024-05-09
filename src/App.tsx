import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ClassComponent subtitle="Prima istanza del componente" color="red" />
                <ClassComponent subtitle="Seconda istanza del componente" />
              </>
            }
          />
          <Route
            path="/functional"
            element={
              <>
                <FunctionalComponent subtitle="Prima istanza del componente" />
                <FunctionalComponent subtitle="Seconda istanza del componente" color="blue" />
              </>
            }
          />

          <Route path="/form" element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
