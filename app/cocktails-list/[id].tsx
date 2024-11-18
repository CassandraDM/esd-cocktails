import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import cocktails from "../cocktails.json";

export default function CocktailDetailsScreen() {
  const { id } = useLocalSearchParams();
  console.log("Retrieved ID:", id); // Debugging line to check the retrieved ID
  const cocktail = cocktails.find((cocktail) => cocktail.id.toString() === id);

  if (!cocktail) {
    console.log("Cocktail not found for ID:", id); // Debugging line to check if the cocktail is not found
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Cocktail not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Cocktail's Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{cocktail.name}</Text>
          <Text style={styles.label}>Composition:</Text>
          <Text style={styles.value}>{cocktail.composition}</Text>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{cocktail.description}</Text>
          <Text style={styles.label}>Origin:</Text>
          <Text style={styles.value}>{cocktail.origin}</Text>
          <Text style={styles.label}>Alcohol Content:</Text>
          <Text style={styles.value}>{cocktail.alcoholContent}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>© ESD Cocktails 2024</Text>
        <Text style={styles.warning}>
          L'abus d'alcool est dangereux pour la santé
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    width: "100%",
  },
  h1: {
    fontSize: 32,
    color: "pink",
    marginBottom: 20,
    textAlign: "center",
  },
  detailsContainer: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: "lightgrey",
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  footer: {
    padding: 10,
    backgroundColor: "pink",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  warning: {
    fontSize: 14,
    color: "grey",
  },
});
