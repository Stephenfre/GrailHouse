import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
// import { loadState, saveState } from "./localStorage";
import ScrollToTop from "./ScrollToTop";
// import LogRocket from "logrocket";
import "bootstrap/dist/css/bootstrap.css";

// const persistedState = loadState();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// store.subscribe(() => {
// 	saveState(store.getState());
// });

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
