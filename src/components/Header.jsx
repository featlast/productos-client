import React, { useContext, useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Hidden,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { CounterContext } from "../helpers/AppContext";
import * as Font from "expo-font";

function AppBar() {
  const { itemsCounter } = useContext(CounterContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "opensans-bold": require("../fonts/OpenSans-Bold.ttf"),
      "opensans-semibold": require("../fonts/OpenSans-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };
  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <>
      <StatusBar
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      />
      <Box safeAreaTop />
      <HStack
        bg={{
          linearGradient: {
            colors: ["#25568D", "#833197"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        px="1"
        py="3"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        position="absolute"
        top=".3"
      >
        <IconButton
          icon={<Icon size="lg" as={FontAwesome5} name="bars" color="white" />}
        />
        <Text color="white" fontSize="20" fontFamily="opensans-bold">
          Territorium
        </Text>

        <IconButton
          style={{ position: "relative" }}
          icon={
            <Icon
              as={FontAwesome5}
              name="shopping-cart"
              size="lg"
              color="white"
            />
          }
        />

        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 100,
            position: "absolute",
            right: 53,
            bottom: 35,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E8C724",
          }}
        >
          <Text
            style={{ position: "relative" }}
            fontSize={"10"}
            color={"#723896"}
          >
            {itemsCounter}
          </Text>
        </View>
      </HStack>
    </>
  );
}

function Example() {
  return (
    <Center>
      <AppBar />
    </Center>
  );
}

export default () => {
  return (
    <Center>
      <Example />
    </Center>
  );
};
