import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

const dictionary = [
  "array",
  "arrays",
  "art",
  "arts",
  "bag",
  "bee",
  "bog",
  "dog",
  "fall",
  "fast",
  "fat",
  "fell",
  "fig",
  "fill",
  "fist",
  "gap",
  "hello",
  "hoop",
  "jack",
  "job",
  "jog",
  "keg",
  "kick",
  "lift",
  "lifts",
  "lire",
  "list",
  "load",
  "loaf",
  "loan",
  "loft",
  "log",
  "lost",
  "lure",
  "lust",
  "man",
  "mic",
  "mice",
  "milk",
  "opal",
  "pan",
  "pee",
  "pin",
  "polk",
  "poo",
  "pop",
  "rant",
  "rat",
  "rats",
  "rent",
  "rest",
  "rust",
  "sat",
  "soft",
  "sort",
  "soy",
  "start",
  "starts",
  "street",
  "tar",
  "tart",
  "tarts",
  "toy",
  "toys",
  "tray",
  "trays",
];
let board = [
  "L",
  "I",
  "S",
  "T",
  "O",
  "F",
  "A",
  "T",
  "S",
  "T",
  "R",
  "S",
  "O",
  "R",
  "A",
  "Y",
];
var i, j, t;
var positionarray1 = 0;
var matrix = new Array(4);

for (t = 0; t < 4; t++) {
  matrix[t] = new Array(3);
}

for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    matrix[i][j] = board.sort(() => Math.random() - 0.5)[i * 4 + j]; //here was the error
  }

  positionarray1 = positionarray1 + 1; //I do this to know which value we are taking
}

var result2 = [];

const onPress2 = (y) => {
  setWord((prevCount) => prevCount + y);
  console.log(count);
};

//const itemEls = useRef(new Array());
const Words = () => {
  const [matrixRandom, setMatrizRandom] = useState(matrix);
  const [word, setWord] = useState("");
  const [count, setCount] = useState("");
  const [dicc, setDicc] = useState(dictionary);
  const [color, setColor] = useState(["#FAD15C", "#F76F1F"]);

  const reset = () => {
    var i, j, t;
    var positionarray1 = 0;
    var matrix = new Array(4);

    for (t = 0; t < 4; t++) {
      matrix[t] = new Array(3);
    }

    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        matrix[i][j] = board.sort(() => Math.random() - 0.5)[i * 4 + j]; //here was the error
      }

      setMatrizRandom(matrix);

      positionarray1 = positionarray1 + 1; //I do this to know which value we are taking
    }
  };

  useEffect(() => {
    if (dicc.find((element) => element == word.toLowerCase()) == undefined) {
      console.log("palabra no encontrada");
    } else {
      alert("Palabra " + word + " encontrada. Busca una nueva palabra");

      const newDicc = dicc.filter((x) => x !== word.toLowerCase());
      console.log("newdicc " + newDicc);
      setDicc(newDicc);
      setWord("");
      reset();
    }
    console.log("word " + word);
    // setLista(board);
    // setMatrizRandom(matrix);
  }, [word]);

  const onPress2 = (y) => {
    setWord((prevCount) => prevCount + y);
    console.log(count);
  };

  const itemEls = useRef(new Array());
  const gradient = useRef(new Array());

  function getNeighbours(col, row) {
    var w = 4;

    var start = (row > 0 ? row * w - w : row * w) + (col > 0 ? col - 1 : col);
    var rowSpan = ((row > 0 ? 2 : 1) + (row < w - 1 ? 1 : 0)) * w;
    var colSpan = (col > 0 ? 2 : 1) + (col < w - 1 ? 1 : 0);

    var center = col + row * w;
    var result = [];

    var vecinos = [];

    // setBloquear(true);

    for (var r = start; r < start + rowSpan; r += w)
      for (var i = r; i < r + colSpan; i++) vecinos.push(itemEls.current[i]);

    if (!(i === center)) result.push(matrix[i]);

    // console.log("vecinos ", vecinos);
    console.log("medio");

    itemEls.current.filter((el) => el != null && i < 16);

    result2 = itemEls.current.filter((el) => !vecinos.includes(el)); // limpio los null
    // aparecen datos  null //  console.log("result2", result2);
    var vecinosbloqueados = result2.filter((el, i) => el != null && i < 16);

    // console.log(result2);
    // console.log("vecinosbloqueados", vecinosbloqueados);

    /*  vecinos.map((x) => {
      if (x.style.backgroundColor !== "green") {
        x.disabled = false;
      } else {
        x.disabled = true;
      }
    });*/

    //  Object.values(vecinos).map((e) => console.log(e.style));

    //   vecinosbloqueados.map((x) => (x.disabled = true));
    // gradient.current[0].props.colors = ["#ABE64D", "#479723"];

    return console.log(
      "result2",
      // gradient.current[0].props.children.props.style
      gradient.current[0].props.children
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            reset(), setWord("");
          }}
          style={{ marginBottom: 50, marginRight: -60 }}
        >
          <Text
            style={{
              backgroundColor: "white",
              color: "gray",
              fontSize: 20,
            }}
          >
            clear word (X)
          </Text>
        </TouchableOpacity>
      </View>
      {matrixRandom.map((x, i) => (
        <View key={i} style={styles.grid}>
          {matrixRandom[i].map((y, j) => (
            <TouchableOpacity
              key={j}
              onPress={(e) => {
                onPress2(y);
                getNeighbours(j, i);
                //   gradient.current[0].props.children.props.children

                //     gradient.current[i].props.colors = ["#ABE64D", "#479723"];

                //  console.log(gradient.current[i].props);

                // gradient.current[i].props.colors = ["#ABE64D", "#479723"];

                //  setColor(["#ABE64D", "#479723"]);
                // gradient.current[i].colors = ["#ABE64D", "#479723"];
                // gradient.current[i].colors == ["#ABE64D", "#479723"];
              }}

              // ref={(element:any) => itemEls.current.push(element)}

              //  ref={ref   => { itemEls.current = ref }}
            >
              <LinearGradient
                ref={(element) => gradient.current.push(element)}
                colors={["#FAD15C", "#F76F1F"]}
                style={{
                  borderRadius: 20,
                  borderColor: "red",
                  borderWidth: 1,
                  margin: 2,
                  width: 80,
                  height: 80,
                  backgroundColor: "grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
                  ref={(element) => itemEls.current.push(element)}
                >
                  {y}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <View style={{ width: "80%" }}>
        <TextInput
          value={word}
          style={{
            backgroundColor: "white",
            paddingLeft: 16,
            fontSize: 30,
            borderColor: "grey",
            color: "lime",
            borderWidth: 2,
            width: 300,
            height: 60,
            marginLeft: 40,
            marginTop: 40,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  title: {
    margin: 4,
    padding: 0,
    fontSize: 20,
    fontWeight: "bold",
    width: 70,
    height: 70,
    color: "white",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //color:'tomato'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
export default Words;
