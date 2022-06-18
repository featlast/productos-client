import React from "react";
import { ScrollView } from "react-native";
import useSWR from "swr";
import { SafeAreaView } from "react-native";
import { ImagenBienvenida } from "./ImagenBienvenida";
import ItemCard from "./ItemCard";

export default function ListProductos() {
  const { data } = useSWR("https://dummyjson.com/products");
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          marginTop: 68,
          paddingBottom: 100,
        }}
      >
        <ImagenBienvenida />
        {data.products.map((product, index) => (
          <ItemCard key={index} {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
