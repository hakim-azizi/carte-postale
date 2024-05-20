import { Outlet } from "react-router-dom";
import AppProvider from "./AppProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <div className="redim">
        <Outlet />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
