import React, { useContext } from "react";
//import { CounterContext } from "../../App";
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Badge,
} from "native-base";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { CounterContext } from "../helpers/AppContext";

export default function ItemCard({
  category,
  title,
  description,
  price,
  thumbnail,
}) {
  const { itemsCounter, setItemsCounter } = useContext(CounterContext);

  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            borderWidth="1"
            marginX={"6"}
            marginY={"2"}
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
            }
            rounded="10"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 105,
                borderTopLeftRadius: 9,
                borderTopRightRadius: 9,
              }}
              resizeMode={isPressed ? "cover" : "contain"}
              source={{
                uri: thumbnail,
              }}
            />
            <Box paddingX={"5"} paddingY={"2"}>
              <HStack alignItems="center">
                <Text color="darkBlue.400">{category}</Text>
                <Spacer />
              </HStack>
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                {title}
              </Text>
              <Text fontSize="sm" color="coolGray.700">
                {description}
              </Text>
              <HStack justifyContent="space-between" alignItems="baseline">
                <TouchableOpacity
                  onPress={() => setItemsCounter(itemsCounter + 1)}
                >
                  <Text
                    fontSize={14}
                    fontWeight="medium"
                    color="darkBlue.600"
                    alignSelf="flex-start"
                  >
                    + Add to Cart
                  </Text>
                </TouchableOpacity>
                <Text fontSize={18} fontWeight="semibold" color="coolGray.800">
                  $ {price}
                </Text>
              </HStack>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
}
