import React from "react";
import BlogHome from "./pages/blog_home/BlogHome";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header>banner</header>
        <BlogHome />
      </Provider>
    </div>
  );
}

export default App;
