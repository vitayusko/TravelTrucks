import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
};

export default App;
