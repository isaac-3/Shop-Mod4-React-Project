import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// const initialState = {
//   cart: undefined,
// };

// const reducer = (currentState, action) => {
//   switch (action.type) {
//     case "CURRENT_CART":
//       return {
//         ...currentState,
//         cart: action.cart,
//       };
//       break;
//   }
//   return currentState;
// };

// const store = createStore(reducer, initialState);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
