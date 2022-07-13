import React, {useEffect, useState, useCallback} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App Running");
  // wrapping  대상의 함수를 useCallback으로 묶는다.
  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevAllowToggle) => !prevAllowToggle);
  };

  // useEffect(() => {
  //   setTimeout(()=>{
  //     setShowParagraph(true);
  //   }, 3000)
  // })

  return (
      <div className="app">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph}/>
        <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      </div>
  );
}

export default App;
