import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
