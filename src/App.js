import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Body />
    </>
  );
};

export default App;
