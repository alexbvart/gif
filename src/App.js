import Header from "./Components/Header/Header";
import GifContainer from "./Components/GifContainer/GifContainer";
import { useState } from "react"
;
import { Route } from "wouter";

function App() {

  const [keyword, setkeyword] = useState('rick')
  return (
    <>
      <Header></Header>
      <Route path="/gif/:keyword" component={GifContainer}></Route>
    </>
  );
}

export default App;
