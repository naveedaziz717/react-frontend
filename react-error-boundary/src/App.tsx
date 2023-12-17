import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
