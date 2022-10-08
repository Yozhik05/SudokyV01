import "./styles.css";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

export default function App() {
  let arrayCell = [];
  arrayCell.length = 81;
  arrayCell.fill("1");
  console.log(arrayCell);
  const [activeCell, setActiveCell] = useState();
  const generateGameArray =()=>{
    let numberArray = [1,2,3,4,5,6,7,8,9]
  const addArray =(arrPrevNumbers,arrNumbers) => {
    let arrNumbers
    Array.from({length: 8}, () => Math.floor(Math.random() * 8))
  }
    let gameArray = [[],[],[],[],[],[],[],[],[]]

  } 
  return (
    <>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          className="gridBox"
          sx={{
            display: "grid",
            width: "300px",
            height: "300px",
            gridGap: 0,
            gridTemplateAreas: `'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell'
          'cell cell cell cell cell cell cell cell cell''cell cell cell cell cell cell cell cell cell'`
          }}
        >
          {arrayCell.map((cell, index) => {
            return (
              <div
                className="cell"
                key={index}
                style={{
                  width: "30px",
                  height: "30px",
                  border: "3px solid #743210",
                  backgroundColor: activeCell === index ? "#32a84a" : "#3232a8",
                  "&:nth-child(odd)": {
                    color: "green"
                  }
                }}
                onClick={() => {
                  if (index !== activeCell) {
                    setActiveCell(index);
                  }
                  if (index === activeCell) {
                    setActiveCell();
                  }
                }}
              >
                1
              </div>
            );
          })}
        </Box>
      </div>

      <br />
    </>
  );
}
