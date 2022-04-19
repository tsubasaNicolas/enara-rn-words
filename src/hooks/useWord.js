import React, { useState, useEffect } from "react";
import { dictionary, board } from "../data";

export const useWord = () => {
  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [],
      i,
      k;
    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(list[i]);
    }
    return matrix;
  }

  var matrix = listToMatrix(
    board.sort(() => Math.random() - 0.5),
    4
  );
  const [matrixRandom, setMatrizRandom] = useState(
    listToMatrix(
      board.sort(() => Math.random() - 0.5),
      4
    )
  );
  const [word, setWord] = useState("");
  const [dicc, setDicc] = useState(dictionary);
  const [valid, setValid] = useState("");

  useEffect(() => {
    if (dicc.find((element) => element === word.toLowerCase()) === undefined) {
      console.log("palabra no encontrada");
    } else {
      const newDicc = dicc.filter((x) => x !== word.toLowerCase());
      console.log("newdicc " + newDicc);
      setValid("Valid");

      setDicc(newDicc);

      setTimeout(() => {
        alert("Palabra " + word + " encontrada. Busca una nueva palabra");
      }, 500);

      setTimeout(() => {
        setWord("");
        setMatrizRandom(matrix);
        setValid("");
      }, 2000);
    }
    console.log("word " + word);
    // setLista(board);
    // setMatrizRandom(matrix);
  }, [word]);

  const findWord = (x) => setWord(word + x);

  return {
    word,
    setWord,
    findWord,
    matrixRandom,
    setMatrizRandom,
    valid,
    matrix,
  };
};
