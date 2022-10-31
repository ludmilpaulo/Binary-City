import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";

function NewClient(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising1.webp")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.group3}>
          <View style={styles.group}>
            <MaterialUnderlineTextbox
              style={styles.materialUnderlineTextbox}
            ></MaterialUnderlineTextbox>
            <MaterialUnderlineTextbox1
              style={styles.materialUnderlineTextbox1}
            ></MaterialUnderlineTextbox1>
            <MaterialUnderlineTextbox2
              style={styles.materialUnderlineTextbox2}
            ></MaterialUnderlineTextbox2>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientList")}
          style={styles.button}
        >
          <View style={styles.rect}>
            <Text style={styles.addNewCilent}>Add New Cilent</Text>
          </View>
        </TouchableOpacity>
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
  group3: {
    width: 539,
    height: 404,
    marginTop: 134,
    marginLeft: 414
  },
  group: {
    width: 539,
    height: 404,
    backgroundColor: "#fff"
  },
  materialUnderlineTextbox: {
    height: 68,
    width: 384
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 360,
    marginTop: 65,
    marginLeft: 12
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 360,
    marginTop: 61,
    marginLeft: 12
  },
  button: {
    width: 368,
    height: 62,
    marginTop: 53,
    marginLeft: 499
  },
  rect: {
    width: 368,
    height: 62,
    backgroundColor: "rgba(225,30,30,1)",
    borderRadius: 100
  },
  addNewCilent: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 26,
    marginTop: 18,
    marginLeft: 94
  }
});

export default NewClient;
