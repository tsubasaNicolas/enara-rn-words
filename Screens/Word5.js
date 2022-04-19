import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

import Boton from "../src/components/Boton";
import { styles } from "../src/theme/appTheme";
import { useWord } from "../src/hooks/useWord";

const Word5 = () => {
  const { word, setWord, findWord, matrixRandom, setMatrizRandom, valid } =
    useWord();
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
