import {View, Text, Image} from "react-native";
import React, {useEffect, useState} from "react";
import * as Font from "expo-font";

export const ImagenBienvenida = () => {
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
        return <View/>;
    }

    return (
        <View>
            <Image
                source={require("../img/ilustracion.jpg")}
                style={{
                    width: "100%",
                    height: 200,
                    position: "relative",
                    opacity: 0.9,
                }}
            />
            <Text
                style={{
                    position: "absolute",
                    top: 30,
                    left: 10,
                    fontSize: 14,
                    fontFamily: "opensans-regular",
                    color: "#FFFFFF",
                }}
            >
                NUEVO CURSO{" "}
            </Text>
            <Text
                style={{
                    position: "absolute",
                    top: 50,
                    fontSize: 20,
                    fontFamily: "opensans-semibold",
                    left: 10,
                    color: "#FFFFFF",
                }}
            >
                TÉCNICAS DE ILUSTRACIÓN
            </Text>
            <Text
                style={{
                    position: "absolute",
                    top: 80,
                    fontSize: 20,
                    fontFamily: "opensans-semibold",
                    left: 10,
                    color: "#fff",
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
                    fontFamily: "opensans-regular",
                    color: "#FFFFFF",
                }}
            >
                Ver más{" "}
            </Text>
        </View>
    );
};
