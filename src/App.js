import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

function App() {
  const [squares, setSquares] = React.useState(boxes);
  function toggle() {
    console.log("Clicked");
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
