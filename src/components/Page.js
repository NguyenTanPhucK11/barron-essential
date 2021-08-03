import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { stockData } from "../data";

function NewVocab() {
  var indents = [
    <div style={{}}>
      <div>Practice memorizing vocabulary BARRONS IELTS</div>
      <Button className="all-button" style={{ margin: "3px" }}>
        New Vocab
      </Button>
      <Button
        variant="contained"
        className="all-button"
        style={{ margin: "3px" }}
        color="primary"
      >
        Start
      </Button>
    </div>,
  ];

  return indents;
}
let score = 0;

let vocabInit = [
  {
    word: "a",
    def: "b",
  },
];
vocabInit = stockData[0];
console.log("lengthStock", stockData.length);

// function Lesson() {
//   var a = [];
//   const onClick = (index) => {
//     vocabInit = stockData[index];
//     console.log("VocabInit", a);
//   };

//   stockData.map((item, index) => {
//     a.push(
//       <div style={{ display: "inline-block" }}>
//         <Button
//           class="btn-primary"
//
//           onClick={() => onClick(index)}
//         >
//           {index + 1}
//         </Button>
//       </div>
//     );
//   });

//   return a;
// }

const Lesson = ({ setLesson }) => {
  return stockData.map((item, index) => (
    <div key={index.toString()} style={{ display: "inline-block" }}>
      <Button
        variant="contained"
        className="all-button"
        color="primary"
        style={{ margin: "3px" }}
        onClick={() => setLesson(index)}
      >
        {index + 1}
      </Button>
    </div>
  ));
};

function Random() {
  var a = [];

  const [list, setCount] = useState(vocabInit);
  const [count, setScore] = useState(score);
  // a.push(Lesson());
  const onClick = (index) => {
    setCount(stockData[index]);
  };

  a.push(
    <div>
      {/* {JSON.stringify(list)} */}
      <Lesson setLesson={onClick} />
      <div>
        <Button
          variant="contained"
          className="all-button"
          style={{ margin: "3px" }}
          color="primary"
          onClick={() => {
            let tempt = [...list];
            tempt.sort(() => Math.random() - 0.5);
            setCount(tempt);
            list.map((item, index) => {
              document.getElementById("ipVocab" + index).value = "";
            });
            // document.getElementById("ipVocab").value = "";
          }}
        >
          Random
        </Button>
        <Button
          variant="contained"
          className="all-button"
          style={{ margin: "3px" }}
          color="primary"
          onClick={() => {
            list.map((item, index) => {
              if (
                document.getElementById("ipVocab" + index).value == item.word
              ) {
                document.getElementById("ipVocab" + index).style.color =
                  "green";
                score++;
              } else {
                document.getElementById("ipVocab" + index).style.color = "red";
                document.getElementById("word" + index).style.display =
                  "inline-block";
              }

              if (document.getElementById("ipVocab" + index).value == "")
                document.getElementById("ipVocab" + index).value = "x";
            });
            // document.getElementById("ipVocab").value = "";
            setScore(score);
          }}
        >
          Finish
        </Button>
        <Button
          variant="contained"
          className="all-button"
          style={{ margin: "3px" }}
          color="primary"
        >
          {count} / 20
        </Button>
      </div>
      {list.map((item, index) => (
        <div key={index.toString()} className="inline w-50">
          <div style={{ display: "inline-block" }}>
            <Button
              variant="contained"
              className="all-button"
              style={{ margin: "3px" }}
              color="primary"
            >
              {index + 1}, {item.def}
            </Button>
          </div>
          <div style={{ display: "inline-block" }}>
            <input type="" className="form-control" id={"ipVocab" + index} />
          </div>
          <div style={{ display: "none" }} id={"word" + index}>
            <Button
              variant="contained"
              className="all-button"
              style={{ margin: "3px" }}
              color="primary"
            >
              {item.word}
            </Button>{" "}
          </div>
        </div>
      ))}
    </div>
    //
  );

  return a;
}

function listShuffle() {
  vocabInit.sort(() => Math.random() - 0.5);
  console.log("listInit" + vocabInit);
}

// const shuffle = (listShuffle) => (e) => {
//   listShuffle = listShuffle.sort(() => Math.random() - 0.5);
//   console.log(listShuffle);
// };
function Page() {
  var indents = Random();
  // var indents = NewVocab();
  // for (var i = 0; i < 10; i++) {
  //   indents.push(
  //     <Button variant="contained" className = "all-button" color="primary" class="btn-primary">
  //       {i + 1}
  //     </Button>
  //   );
  // }
  // indents.push(RandomVocab());
  return indents;
}

function RandomVocab() {
  var indents = [];
  for (var i = 0; i < 10; i++) {
    indents.push(
      <div>
        <Button
          variant="contained"
          className="all-button"
          style={{ margin: "3px" }}
          color="primary"
        >
          {i + 1}
        </Button>
        <Button
          variant="contained"
          className="all-button"
          style={{ margin: "3px" }}
          color="primary"
        >
          Vocab
        </Button>
      </div>
    );
  }
  return indents;
}

export default Page;
