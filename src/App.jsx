// import React from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header/Header";
// import AppRouter from "./routes/AppRouter";
// import { store } from "./redux/store";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Header />
//         <main>
//           <AppRouter />
//         </main>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

// src/App.jsx

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <AppRouter />
        </main>
      </Router>
    </Provider>
  );
};

export default App;
