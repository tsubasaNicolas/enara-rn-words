import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { styles } from "../theme/appTheme";
import { LinearGradient } from "expo-linear-gradient";

const Boton = ({ texto, color = ["#FAD15C", "#F76F1F"], accion }) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <LinearGradient
        // ref={(element) => itemEls.current.push(element)}
        style={styles.gradiente}
        //    ref={(element) => itemEls.current.push(element)}
        colors={color}
        writable={true}
      >
        <Text
          style={{
            ...styles.botonTexto,
          }}
        >
          {texto}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Boton;
