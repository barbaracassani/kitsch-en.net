import React from "react";
import BlogHome from "./pages/blog_home/BlogHome";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./App.style";
import Header from "./pages/common/components/header/Header";
import Nav from "./pages/common/components/header/Nav";
import Logo from "./pages/common/components/header/Logo";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/layouts/Main";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <MainLayout>
          <Provider store={store}>
            <BlogHome />
          </Provider>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
