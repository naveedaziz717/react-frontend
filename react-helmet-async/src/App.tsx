import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <AllRoutes />
      </Router>
    </HelmetProvider>
  );
}
