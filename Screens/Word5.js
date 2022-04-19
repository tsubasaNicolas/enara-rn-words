import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { dictionary, board } from "../src/data";
import Boton from "../src/components/Boton";
import { styles } from "../src/theme/appTheme";

//boardRandom = board.sort(() => Math.random() - 0.5);

const Word5 = () => {
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
  return (
    <View>
      <View style={styles.contentClear}>
        {word !== "" && (
          <TouchableOpacity
            onPress={() => {
              setMatrizRandom(matrix);
              setWord("");
            }}
            style={styles.clear}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 20,
              }}
            >
              clear word
            </Text>

            <Text style={styles.icon}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.grid}>
        {matrixRandom.map((x, i) =>
          matrixRandom[i].map((y, j) => (
            <Boton key={j} texto={y} accion={findWord} />
          ))
        )}
      </View>

      <View style={styles.contentValid}>
        <TextInput value={word} style={styles.textInput} />
        <Text style={styles.textValid}>{valid}</Text>
      </View>
    </View>
  );
};

export default Word5;
