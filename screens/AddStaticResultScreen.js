import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import backArrow from "../assets/backarrow.png";
import Colors from "../constants/colors";

const AddStaticResultScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredValue(enteredText);
  };

  const addInputHandler = () => {
    if (props.curlUpsMode) {
      props.student.curlUps = enteredValue;
    } else if (props.pullUpsMode) {
      props.student.pullUps = enteredValue;
    } else {
      props.student.sitAndReach = enteredValue;
    }

    props.setStaticResultScreen(false);
    props.saveStudent(props.student);
    setEnteredValue("");
  };

  let placeholder;

  if (props.curlUpsMode) {
    placeholder = "# of Curl-Ups";
  } else if (props.pullUpsMode) {
    placeholder = "# of Pull-Ups";
  } else {
    placeholder = "Reach Length";
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title={props.title}
          style={styles.studentName}
          imageSource={backArrow}
          onPress={props.onCancel}
        />

        <View style={styles.staticView}>
          <View style={styles.inputView}>
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              onChangeText={inputHandler}
              value={enteredValue}
              maxLength={3}
              keyboardType="number-pad"
            />
            <View style={styles.button}>
              <CustomButton title="Submit" onPress={addInputHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },

  studentName: {
    fontSize: 20,
  },

  inputView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    backgroundColor: Colors.shades.secondary,
    paddingVertical: 30,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth: 1,
    height: "60%",
    width: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 2,
  },

  staticView: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    padding: 15,
    width: "55%",
    textAlign: "center",
    backgroundColor: Colors.colors.background,
    borderRadius: 15,
  },

  button: {
    marginTop: 20,
    margin: 10,
  },
});

export default AddStaticResultScreen;