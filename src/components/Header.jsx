import React, { useContext } from "react";
//import { CounterContext } from "../../App";
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
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { CounterContext } from "../helpers/AppContext";

function AppBar() {
  const { itemsCounter } = useContext(CounterContext);

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
          icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />}
        />
        <Text color="white" fontSize="20" fontWeight="bold">
          Territorium
        </Text>
        <IconButton
          style={{ position: "relative" }}
          icon={
            <Icon
              as={MaterialIcons}
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
            borderRadius: 15 / 2,
            position: "absolute",
            right: 50,
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
