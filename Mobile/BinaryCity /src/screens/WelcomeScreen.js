import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/binary-animation.gif")}
        resizeMode="cover"
        style={styles.image3}
        imageStyle={styles.image3_imageStyle}
      >
        <Image
          source={require("../assets/images/logo1.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <View style={styles.group}>
          <View style={styles.rect}>
            <Text style={styles.loremIpsum}>Welcome to BinaryCity</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image3: {
    flex: 1
  },
  image3_imageStyle: {},
  image2: {
    width: 1131,
    height: 450,
    marginTop: 22,
    alignSelf: "center"
  },
  group: {
    width: 509,
    height: 87,
    marginTop: 34,
    marginLeft: 444
  },
  rect: {
    width: 509,
    height: 87,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 100
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 26,
    marginLeft: 87
  }
});

export default WelcomeScreen;
