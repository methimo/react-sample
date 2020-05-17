import React from "react";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header"; // importを追加

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header /> {/* Headerコンポーネントを追加 */}
        <Route path="/" exact>
          <Hello />
        </Route>
        <Route path="/hello" exact>
          <Hello />
        </Route>
        <Route path="/counter" exact>
          <Counter />
        </Route>
        <Route path="/todo-list" exact>
          <TodoList />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Router;
