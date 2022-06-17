import React, { Suspense } from "react";
import { ScrollView } from "react-native";
import Card from "./Card";
import useSWR from "swr";
import { Text, SafeAreaView } from "react-native";
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
          // <Card key={index} name={user.title} picture={user.thumbnail} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
