import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counterc";
import Item from "./components/Item";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Item name="Macbook Pro" price="1000" />
      <Item name="Pendrive 1TB" price="100" />
      <Item name="iPhone" price="999" />
      <Cart />
    </div>
  );
}

export default App;
