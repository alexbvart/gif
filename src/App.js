import Header from "./Components/Header/Header";
import GifContainer from "./pages/GifContainer/GifContainer";
import { useState } from "react"
;
import { Route } from "wouter";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home";

function App() {

  const [keyword, setkeyword] = useState('rick')
  return (
    <>
      <Header></Header>
      <Route path="/gif/:keyword" component={GifContainer}></Route>
      <Route path="/" component={Home} ></Route>
      <Route path="/gif/:id" component={Detail} ></Route>
      <Route path="/search/:keyword" component={GifContainer}></Route>
    </>
  );
}

export default App;
