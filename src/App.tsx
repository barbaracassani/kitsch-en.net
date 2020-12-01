import React from "react";
import BlogHome from "./pages/blog_home/BlogHome";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./App.style";
import Header from "./pages/common/components/header/Header";
import Nav from "./pages/common/components/header/Nav";
import Logo from "./pages/common/components/header/Logo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainLayout } from "./pages/layouts/Main";
import BlogPost from "./pages/blog_post/BlogPost";
import StaticPost from "./pages/static_post/StaticPost";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <MainLayout>
          <Provider store={store}>
            <Switch>
              <Route path="/" exact={true}>
                <BlogHome />
              </Route>
              <Route path={"/blog/:slug"}>
                <BlogPost />
              </Route>
              <Route path={"/blog/"}>
                <BlogHome />
              </Route>
              <Route path={"/:slug"}>
                <StaticPost />
              </Route>
            </Switch>
          </Provider>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
