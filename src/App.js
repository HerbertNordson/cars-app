import "./App.css";
import { StoreProvider } from "./context";
import { Catalog } from "./pages/Catalog";

function App() {
  return (
    <StoreProvider>
      <div className="App min-h-screen bg-primary text-txt">
        <Catalog />
      </div>
    </StoreProvider>
  );
}

export default App;
