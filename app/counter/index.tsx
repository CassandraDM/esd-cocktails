import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Compteur: {counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, counter === 0 && styles.buttonDisabled]}
          onPress={handleDecrement}
          disabled={counter === 0}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  counterText: {
    fontSize: 32,
    color: "pink",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    width: 50,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "grey",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
