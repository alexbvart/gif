import React, { Suspense } from "react";
import { Route } from "wouter";

/* CONTEX */
import { GifContextProvider } from "./context/GifContext";

/* COMPONENTS */
import Header from "./Components/Header/Header";
const HomePage = React.lazy(()=> import('./pages/Home'))
const DetailPage = React.lazy(()=> import('./pages/Detail/Detail'))
const SearchlPage = React.lazy(()=> import('./pages/GifContainer/GifContainer'))
const NotFound = React.lazy(()=> import('./pages/NotFound/NotFound'))





function App() {
  return (
    <>
      <Header></Header>
      <GifContextProvider>
      <Suspense fallback={null}>
        <Route path="/" component={HomePage} ></Route>
        <Route path="/gif/:id" component={DetailPage} ></Route>
        <Route path="/search/:keyword" component={SearchlPage}></Route>
        <Route path="/404" component={NotFound}></Route>
      </Suspense>
      </GifContextProvider>
    </>
  );
}

export default App;
