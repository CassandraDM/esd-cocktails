import cocktails from "../cocktails.json";
import { View, Text, StyleSheet } from "react-native";

export default function CocktailDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Cocktail's Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{cocktails[0].name}</Text>
          <Text style={styles.label}>Composition:</Text>
          <Text style={styles.value}> {cocktails[0].composition}</Text>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}> {cocktails[0].description}</Text>
          <Text style={styles.label}>Origin:</Text>
          <Text style={styles.value}> {cocktails[0].origin}</Text>
          <Text style={styles.label}>Alcohol Percentage:</Text>
          <Text style={styles.value}> {cocktails[0].alcoholContent}</Text>
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
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: "90%",
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
  text: {
    fontSize: 16,
    color: "white",
  },
  footer: {
    padding: 10,
    backgroundColor: "pink",
    alignItems: "center",
  },
  warning: {
    fontSize: 14,
    color: "grey",
  },
});
