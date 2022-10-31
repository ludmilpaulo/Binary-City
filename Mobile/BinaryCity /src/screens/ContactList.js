import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";

function ContactList(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <ImageBackground
        source={require("../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising3.webp")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("NewClient")}
          style={styles.button}
        >
          <View style={styles.rect6}>
            <Text style={styles.addNewClient}>Add New Client</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rect}>
              <View style={styles.rect2StackStack}>
                <View style={styles.rect2Stack}>
                  <View style={styles.rect2}></View>
                  <Text style={styles.clients}>Clients</Text>
                  <Text style={styles.clientCode}>Client Code</Text>
                  <Text style={styles.lps001}>LPS001</Text>
                  <Text style={styles.contac}>Contac</Text>
                </View>
                <View style={styles.rect5}></View>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.loremIpsum}>
                  Ludmil Paulo Samuel Avelino
                </Text>
                <Text style={styles.loremIpsum2}>3</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  button: {
    width: 387,
    height: 52,
    marginTop: 48,
    marginLeft: 457
  },
  rect6: {
    width: 387,
    height: 52,
    backgroundColor: "rgba(229,13,13,1)",
    borderRadius: 100
  },
  addNewClient: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    marginTop: 12,
    marginLeft: 94
  },
  scrollArea: {
    width: 937,
    height: 467,
    marginTop: 10,
    marginLeft: 203
  },
  scrollArea_contentContainerStyle: {
    height: 467,
    width: 937
  },
  rect: {
    width: 937,
    height: 467,
    backgroundColor: "#E6E6E6"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 937,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(208,2,27,1)"
  },
  clients: {
    top: 0,
    left: 354,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 64
  },
  clientCode: {
    top: 71,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 44,
    width: 246,
    height: 60,
    left: 357
  },
  lps001: {
    top: 127,
    left: 417,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  contac: {
    top: 59,
    left: 688,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 64
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 937,
    height: 151,
    position: "absolute"
  },
  rect5: {
    top: 121,
    left: 15,
    width: 7,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  name: {
    top: 71,
    left: 53,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 44
  },
  loremIpsum: {
    top: 127,
    left: 18,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  loremIpsum2: {
    top: 134,
    left: 778,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  rect2StackStack: {
    width: 937,
    height: 158
  }
});

export default ContactList;
