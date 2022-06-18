import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, Box, HStack, Spacer } from "native-base";
import { View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";
import { CounterContext } from "../helpers/AppContext";

export default function ItemCard({
  category,
  title,
  description,
  price,
  thumbnail,
}) {
  const { itemsCounter, setItemsCounter } = useContext(CounterContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "opensans-regular": require("../fonts/OpenSans-Regular.ttf"),
      "opensans-bold": require("../fonts/OpenSans-Bold.ttf"),
      "opensans-semibold": require("../fonts/OpenSans-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };
  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <Pressable>
      {({ isHovered, isPressed }) => {
        return (
          <Box
            borderWidth="1"
            marginX={"6"}
            marginY={"2"}
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed ? "coolGray.200" : isHovered ? "#00000029" : "#FFFFFF"
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
                <Text
                  style={{ textTransform: "uppercase" }}
                  fontSize={10}
                  fontFamily="opensans-regular"
                  color="#507ED8"
                >
                  {category}
                </Text>
                <Spacer />
              </HStack>
              <Text
                color="#373E4A"
                fontSize="16"
                fontFamily="opensans-semibold"
              >
                {title}
              </Text>
              <Text fontSize="12" color="#737C8B" fontFamily="opensans-regular">
                {description}
              </Text>
              <HStack justifyContent="space-between" alignItems="baseline">
                <TouchableOpacity
                  onPress={() => setItemsCounter(itemsCounter + 1)}
                >
                  <Text
                    fontSize={14}
                    color="#507ED8"
                    fontFamily="opensans-regular"
                    alignSelf="flex-start"
                  >
                    + Add to Cart
                  </Text>
                </TouchableOpacity>
                <Text
                  fontSize={18}
                  fontFamily="opensans-semibold"
                  color="#373E4A"
                >
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
