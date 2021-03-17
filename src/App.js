import Header from "./Components/Header/Header";
import GifContainer from "./Components/GifContainer/GifContainer";
import { useState } from "react";

function App() {

  const [keyword, setkeyword] = useState('rick')
  return (
    <>
      <Header></Header>
      <button onClick={()=> setkeyword('mapache')} >change</button>
      <GifContainer keyword={keyword}></GifContainer>
    </>
  );
}

export default App;
