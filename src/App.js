import "./App.css";
import Routing from "./routes/routing";
import { BrandProvider } from "./contexts/BrandContext";

function App() {
  return (
    <BrandProvider>
      <Routing />
    </BrandProvider>
  );
}

export default App;
