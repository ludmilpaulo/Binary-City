import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ClientList from "./src/screens/ClientList";
import NewClient from "./src/screens/NewClient";
import ContactList from "./src/screens/ContactList";

const DrawerNavigation = createDrawerNavigator({
  WelcomeScreen: WelcomeScreen,
  ClientList: ClientList,
  NewClient: NewClient,
  ContactList: ContactList
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    WelcomeScreen: WelcomeScreen,
    ClientList: ClientList,
    NewClient: NewClient,
    ContactList: ContactList
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
