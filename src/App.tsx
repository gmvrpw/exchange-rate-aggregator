import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const IndexPage = lazy(() => import("./page/Index"));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={IndexPage} />
    </Routes>
  );
};

export default App;
