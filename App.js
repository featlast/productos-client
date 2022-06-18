//Imports de componentes del sistema
import { Suspense, useState } from "react";
import { SWRConfig } from "swr";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

//Importacion de Componentes Propios
import ListProductos from "./src/components/ListProductos";
import Header from "./src/components/Header";
import { NativeBaseProvider } from "native-base";
import { config } from "./src/helpers/NativeBaseConfig";
import { CounterContext } from "./src/helpers/AppContext";

export default function App() {
  const [itemsCounter, setItemsCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <CounterContext.Provider value={{ itemsCounter, setItemsCounter }}>
        <NativeBaseProvider config={config}>
          <SWRConfig
            value={{
              refreshInterval: 0,
              fetcher: (...args) => fetch(...args).then((res) => res.json()),
              suspense: true,
            }}
          >
            <Header />
            <Suspense
              fallback={
                <Text style={styles.title}>
                  <ActivityIndicator size="large" color="#833197" />
                </Text>
              }
            >
              <ListProductos />
            </Suspense>
          </SWRConfig>
        </NativeBaseProvider>
      </CounterContext.Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 70,
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
