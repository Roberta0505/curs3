import React, { useState } from 'react';
import Myp from "./Myp";
import MyButton from './MyButton';

function App() {
  let [buttonPressed, setButtonPressed] = useState("None");
  let buttonCbk = (button_type: string) => {
    setButtonPressed(button_type)

  }

  // let button1 = (<></>);
  // let button2 = (<></>);
  // let button3 = (<></>);

  // if (buttonPressed != "buton1") {
  //   button1 = <MyButton button_cbk={buttonCbk} text="buton1"></MyButton>
  // }

  // if (buttonPressed != "buton2") {
  //   button2 = <MyButton button_cbk={buttonCbk} text="buton2"></MyButton>
  // }

  // if (buttonPressed != "buton3") {
  //   button3 = <MyButton button_cbk={buttonCbk} text="buton3"></MyButton>
  // }

  let v = [];

  let keys = ["buton1", "buton2", "buton3"];

  for (let k of keys) {
    if (buttonPressed !== k) {
      v.push(<MyButton key={k} button_cbk={buttonCbk} text={k}></MyButton>);
    }
  }

  // if (buttonPressed != "buton1") {
  //   v.push(<MyButton key={"buton1"} button_cbk={buttonCbk} text="buton1"></MyButton>);
  // }

  // if (buttonPressed != "buton2") {
  //   v.push(<MyButton key={"buton2"} button_cbk={buttonCbk} text="buton2"></MyButton>);
  // }

  // if (buttonPressed != "buton3") {
  //   v.push(<MyButton key={"buton3"} button_cbk={buttonCbk} text="buton3"></MyButton>);}


  return (
    <>
      {/* <Myp text="ceva"><p>Altceva</p></Myp> */}
      <Myp text={"Ai apasat butonul " + buttonPressed}></Myp>
      {v}
      {/* 
      Varianta inline urmeaza*/}

      {/* {
        keys.map((k) => {
          // transf array de cv in array de altcv 
          if (buttonPressed !== k) {
            return <MyButton key={k} button_cbk={buttonCbk} text={k}></MyButton>
          }
        })
      } */}


      {/* <MyButton button_cbk={buttonCbk} text="buton1"></MyButton>
      <MyButton button_cbk={buttonCbk} text="buton2"></MyButton>
      <MyButton button_cbk={buttonCbk} text="buton3"></MyButton> */}
      {/* {button1}
      {button2}
      {button3} */}
      {/* {buttonPressed !== "buton1" && <MyButton button_cbk={buttonCbk} text="buton1"></MyButton>}
      {buttonPressed !== "buton2" && <MyButton button_cbk={buttonCbk} text="buton2"></MyButton>}
      {buttonPressed !== "buton3" && <MyButton button_cbk={buttonCbk} text="buton3"></MyButton>} */}



    </>
  );
}

export default App;
