import { createStore } from "../redux";
import { reducer } from "../reducer";

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const asyncButton = document.getElementById("async");

const store = createStore(reducer, 0);

incrementButton.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decrementButton.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

store.subscribe(() => {
  let state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "__INIT__" });
