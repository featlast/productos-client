import { View, Text, Image } from "react-native";
import React from "react";

export const ImagenBienvenida = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        }}
        style={{
          width: "100%",
          height: 200,
          position: "relative",
        }}
      />
      <Text
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: 14,
          color: "#fff",
        }}
      >
        NUEVO CURSO{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 50,
          fontSize: 20,
          left: 10,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        TÉCNICAS DE ILUSTRACION
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 80,
          fontSize: 20,
          left: 10,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        PARA LIBROS INFANTILES
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 150,
          left: 10,
          fontSize: 14,
          color: "#fff",
        }}
      >
        Ver más{" "}
      </Text>
    </View>
  );
};
